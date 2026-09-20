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
		"content": `<style>.l8dn9jbyp {
  d: path("M2 15h20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o8od38cnm {
  d: path("M4 18h16");
}

.sg1q03b0n {
  d: path("M2.5 15a6.5 6.5 0 0 1 13 0");
}

.zgowxqjxj {
  d: path("M15.5 15V8H21v7");
}
</style><g class="nrj6p8qat"><path class="l8dn9jbyp"/><path class="sg1q03b0n"/><path class="zgowxqjxj"/><path class="o8od38cnm"/></g>`,
		"fallback": "iconmind:in-flight-meal-outline-regular",
	});
}

export default Component;
