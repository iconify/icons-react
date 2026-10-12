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
		"content": `<style>.vhqzjlbfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 3.75h11.5v3.5H6.25zm2 3.5l-2 14m9.5-14l2 14M7 16h10");
}
</style><path class="vhqzjlbfd"/>`,
		"fallback": "iconoven:bar-stools-sharp",
	});
}

export default Component;
