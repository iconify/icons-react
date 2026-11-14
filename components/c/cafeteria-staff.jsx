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

.i9e8-zb3n {
  d: path("M10.5 5.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.xxqqyjbfa {
  d: path("M4.5 14.75a7.5 7.5 0 0 1 15 0Zm-.75 2.75h16.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 20.25 20H3.75a1.25 1.25 0 0 1-1.25-1.25a1.25 1.25 0 0 1 1.25-1.25");
}
</style><g class="hntgybcog"><path class="xxqqyjbfa"/><path class="i9e8-zb3n"/></g>`,
		"fallback": "uix:cafeteria-staff",
	});
}

export default Component;
