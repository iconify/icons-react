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
		"content": `<style>.fvd35jx0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 7h7.75A4.375 4.375 0 0 1 19 11.375v1.25A4.375 4.375 0 0 1 14.625 17h-7.75A4.375 4.375 0 0 1 2.5 12.625v-1.25A4.375 4.375 0 0 1 6.875 7M21.5 10.5v3M5.5 12h3M7 10.5v3m5.75-1.5h3");
}
</style><path class="fvd35jx0h"/>`,
		"fallback": "uix:battery-plus-minus",
	});
}

export default Component;
