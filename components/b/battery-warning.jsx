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
		"content": `<style>.w29ozelgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 5.5h7.75A4.375 4.375 0 0 1 19 9.875v4.25a4.375 4.375 0 0 1-4.375 4.375h-7.75A4.375 4.375 0 0 1 2.5 14.125v-4.25A4.375 4.375 0 0 1 6.875 5.5M21.5 10v4M10.75 8.5v4m0 3h.01");
}
</style><path class="w29ozelgh"/>`,
		"fallback": "uix:battery-warning",
	});
}

export default Component;
