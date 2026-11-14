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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p15qjka4g {
  d: path("m12 10l3 1v2c0 1.9-1.25 3-3 3.75C10.25 16 9 14.9 9 13v-2Z");
}

.tf4eakkvp {
  d: path("M6.5 7h11a3.5 3.5 0 0 1 3.5 3.5v6a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 16.5v-6A3.5 3.5 0 0 1 6.5 7m2 0V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7");
}
</style><g class="hntgybcog"><path class="tf4eakkvp"/><path class="p15qjka4g"/></g>`,
		"fallback": "uix:business-insurance",
	});
}

export default Component;
