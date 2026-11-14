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
		"content": `<style>.cxaum8bjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 9.5A4.5 4.5 0 0 1 10 3.25l2 1.25l2-1.25a4.5 4.5 0 0 1-.25 6.25a4.5 4.5 0 0 1 6-2.25l-.5 2.5l1.75 1.5A4.5 4.5 0 0 1 14.75 13a4.5 4.5 0 0 1 4 5H16.5l-1 2.25A4.5 4.5 0 0 1 12 15a4.5 4.5 0 0 1-3.5 5.25L7.5 18H5.25a4.5 4.5 0 0 1 4-5A4.5 4.5 0 0 1 3 11.25l1.75-1.5l-.5-2.5a4.5 4.5 0 0 1 6 2.25M12 12h.01");
}
</style><path class="cxaum8bjw"/>`,
		"fallback": "uix:cherry-blossom",
	});
}

export default Component;
