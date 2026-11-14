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
		"content": `<style>.vjtu24buh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 3.5h2.75A2.625 2.625 0 0 1 10.5 6.125v2.75A2.625 2.625 0 0 1 7.875 11.5h-2.75A2.625 2.625 0 0 1 2.5 8.875v-2.75A2.625 2.625 0 0 1 5.125 3.5m11 0h2.75A2.625 2.625 0 0 1 21.5 6.125v2.75a2.625 2.625 0 0 1-2.625 2.625h-2.75A2.625 2.625 0 0 1 13.5 8.875v-2.75A2.625 2.625 0 0 1 16.125 3.5M2.5 16.5H10m-7.5 4H7m7.75-2.5l2 2L21 15.75");
}
</style><path class="vjtu24buh"/>`,
		"fallback": "uix:colour-contrast-check",
	});
}

export default Component;
