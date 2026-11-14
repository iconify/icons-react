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
		"content": `<style>.eyi3spbxl {
  d: path("m7.5 7.5l1-4h1l1 4m2.5-3h.01m4.99 10V18m0 3h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mibtptc1d {
  d: path("M3.5 19.25v-8.116a1.75 1.75 0 0 1 .406-1.121L5.475 8.13A1.75 1.75 0 0 1 6.82 7.5h4.36a1.75 1.75 0 0 1 1.345.63l1.569 1.883a1.75 1.75 0 0 1 .406 1.121v8.116A1.75 1.75 0 0 1 12.75 21h-7.5a1.75 1.75 0 0 1-1.75-1.75");
}
</style><g class="hntgybcog"><path class="mibtptc1d"/><path class="eyi3spbxl"/></g>`,
		"fallback": "uix:allergen-mustard",
	});
}

export default Component;
