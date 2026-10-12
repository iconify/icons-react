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
		"content": `<style>.xngo6fbaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 4.75h9.5M15 3l1.75 1.75L15 6.5m1.75 3.75h-9.5M9 8.5l-1.75 1.75L9 12m-6.25 3h18.5v3H2.75zm2.75 3v3.25m13-3.25v3.25");
}
</style><path class="xngo6fbaw"/>`,
		"fallback": "iconoven:hot-desk-sharp",
	});
}

export default Component;
