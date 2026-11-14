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

.mtuecs9vi {
  d: path("M6 5h12a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 19H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 5");
}

.wdi7qnb2z {
  d: path("M7.5 12a4.5 7 0 1 0 9 0a4.5 7 0 1 0-9 0m-5 0h19");
}
</style><g class="hntgybcog"><path class="mtuecs9vi"/><path class="wdi7qnb2z"/></g>`,
		"fallback": "uix:globe-flat",
	});
}

export default Component;
