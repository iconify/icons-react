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

.j8_f7nbih {
  d: path("M7.375 4.5h9.25A4.375 4.375 0 0 1 21 8.875v7.75A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-7.75A4.375 4.375 0 0 1 7.375 4.5M8 2.5v4m8-4v4");
}

.vvb9ps5lf {
  d: path("m11.75 10.298l1.998 1.153a1.5 1.5 0 0 1 0 2.598l-1.998 1.153a1.5 1.5 0 0 1-2.25-1.299v-2.306a1.5 1.5 0 0 1 2.25-1.299");
}
</style><g class="hntgybcog"><path class="j8_f7nbih"/><path class="vvb9ps5lf"/></g>`,
		"fallback": "uix:contract-start",
	});
}

export default Component;
