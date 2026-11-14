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

.o5tzv31wj {
  d: path("M3.75 16.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m9-1a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.ph2ae_s9v {
  d: path("M7.5 12.75C7.5 9 10 5.5 15 4m1.5 7.75c0-3.25-1-6.25-1.5-7.75");
}
</style><g class="hntgybcog"><path class="o5tzv31wj"/><path class="ph2ae_s9v"/></g>`,
		"fallback": "uix:cherries",
	});
}

export default Component;
