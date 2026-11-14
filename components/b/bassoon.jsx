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

.o1lbe0b4b {
  d: path("M9.25 21.5L10.5 18V5.25a1.75 1.75 0 0 1 3.5 0V18l1.25 3.5Z");
}

.x8o_ol39y {
  d: path("M10.5 9C7.5 9 6 7.5 6 5L4.5 2.5");
}
</style><g class="hntgybcog"><path class="o1lbe0b4b"/><path class="x8o_ol39y"/></g>`,
		"fallback": "uix:bassoon",
	});
}

export default Component;
