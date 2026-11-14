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

.ov5uft7dk {
  d: path("M9.5 9a3 3 0 0 1 6 0c0 1.5-1.25 2-2.5 2.75");
}

.zhhdh9b_h {
  d: path("M6.5 9a6 6 0 0 1 12 0c0 3.25-2.5 4.5-3.25 6.75c-.65 2-1.75 4.75-4.5 4.75c-2 0-3.25-1.25-3.75-2.75");
}
</style><g class="hntgybcog"><path class="zhhdh9b_h"/><path class="ov5uft7dk"/></g>`,
		"fallback": "uix:hearing",
	});
}

export default Component;
