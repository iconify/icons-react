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

.m-mcszb3d {
  d: path("M9.25 9.5h5.25A1.5 1.5 0 0 1 16 11v2a1.5 1.5 0 0 1-1.5 1.5H9.25a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5m1.25 0v5m2.75-5v5m5.5 0V9H21");
}

.ymte612km {
  d: path("M2.5 5.5H5v9h16.5V18h-19Z");
}
</style><g class="hntgybcog"><path class="ymte612km"/><path class="m-mcszb3d"/></g>`,
		"fallback": "uix:composing-stick",
	});
}

export default Component;
