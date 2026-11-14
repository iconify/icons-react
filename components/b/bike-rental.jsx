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

.j-ygiy7ax {
  d: path("m5.5 16.5l4.5-6l4.5 6m-4.5-6h6l2.5 6");
}

.xfo0tbbnm {
  d: path("M2 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m13 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><g class="hntgybcog"><path class="xfo0tbbnm"/><path class="j-ygiy7ax"/></g>`,
		"fallback": "uix:bike-rental",
	});
}

export default Component;
