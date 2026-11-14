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
		"content": `<style>.e2j23zbjh {
  d: path("M7.375 4h9.25A4.375 4.375 0 0 1 21 8.375v8.75a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 17.125v-8.75A4.375 4.375 0 0 1 7.375 4M8 2.5V6m8-3.5V6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j72hfcbeq {
  d: path("M9.75 12.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m2.25-6V8m0 9.5v1.25m-6.25-6h1.5m9.5 0h1.5");
}
</style><g class="hntgybcog"><path class="e2j23zbjh"/><path class="j72hfcbeq"/></g>`,
		"fallback": "uix:calendar-holiday",
	});
}

export default Component;
