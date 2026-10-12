import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x2qkrkuld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7c3-3.5 6-3.5 9.25-1s6.25 2.5 9.25-1v4.5c-3 3.5-6 3.5-9.25 1s-6.25-2.5-9.25 1Zm0 13.35V19l.72-.53l3.31-2.44l.72-.53l.69.58l1.62 1.34l.69.58l.82-.37l2.86-1.26L15 16l.79.44l4.67 2.62l.79.44v1.75H2.75z");
}
</style><path class="x2qkrkuld"/>`,
		"fallback": "iconoven:aurora-sharp",
	});
}

export default Component;
