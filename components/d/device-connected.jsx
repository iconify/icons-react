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
		"content": `<style>.p6mfotb0a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 10h2.75A4.375 4.375 0 0 1 14 14.375v2.75A4.375 4.375 0 0 1 9.625 21.5h-2.75A4.375 4.375 0 0 1 2.5 17.125v-2.75A4.375 4.375 0 0 1 6.875 10M14 6a4 4 0 0 1 4 4m-4-7.5a7.5 7.5 0 0 1 7.5 7.5");
}
</style><path class="p6mfotb0a"/>`,
		"fallback": "uix:device-connected",
	});
}

export default Component;
