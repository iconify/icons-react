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
		"content": `<style>.hi67so1hv {
  d: path("M10.5 3h-5A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21h13a2.5 2.5 0 0 0 2.5-2.5v-5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tnxcwhj3l {
  d: path("m9 15l.5-3L18 3.5A2 2 0 0 1 20.5 6L12 14.5Z");
}
</style><g class="hntgybcog"><path class="hi67so1hv"/><path class="tnxcwhj3l"/></g>`,
		"fallback": "uix:compose-pen",
	});
}

export default Component;
