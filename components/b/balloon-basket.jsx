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
		"content": `<style>.g7b9rzb9h {
  d: path("M7.586 13h8.828a1.75 1.75 0 0 1 1.724 2.054l-.883 5a1.75 1.75 0 0 1-1.723 1.446H8.468a1.75 1.75 0 0 1-1.723-1.446l-.883-5A1.75 1.75 0 0 1 7.586 13M5.5 10L7 2.5M18.5 10L17 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o7zy3bxsf {
  d: path("M5 10h14a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 19 13H5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 5 10");
}
</style><g class="hntgybcog"><path class="o7zy3bxsf"/><path class="g7b9rzb9h"/></g>`,
		"fallback": "uix:balloon-basket",
	});
}

export default Component;
