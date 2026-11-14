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
		"content": `<style>.w5o1s2_3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 12h.5a1.75 1.75 0 0 1 1.75 1.75v5.5A1.75 1.75 0 0 1 5.75 21h-.5a1.75 1.75 0 0 1-1.75-1.75v-5.5A1.75 1.75 0 0 1 5.25 12m6.5-3.5h.5A1.75 1.75 0 0 1 14 10.25v9A1.75 1.75 0 0 1 12.25 21h-.5A1.75 1.75 0 0 1 10 19.25v-9a1.75 1.75 0 0 1 1.75-1.75m6.5 5.5h.5a1.75 1.75 0 0 1 1.75 1.75v3.5A1.75 1.75 0 0 1 18.75 21h-.5a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 18.25 14M5.5 9.25C4.25 8.5 4.1 7 5.5 5.5c1.4 1.5 1.25 3 0 3.75m6.5-3.5C10.75 5 10.6 3.5 12 2c1.4 1.5 1.25 3 0 3.75m6.5 5.5c-1.25-.75-1.4-2.25 0-3.75c1.4 1.5 1.25 3 0 3.75");
}
</style><path class="w5o1s2_3x"/>`,
		"fallback": "uix:candles-trio",
	});
}

export default Component;
