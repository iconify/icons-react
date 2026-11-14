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
		"content": `<style>.ctkfkebuw {
  d: path("M5.125 5.5h13.75A2.625 2.625 0 0 1 21.5 8.125v7.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 15.875v-7.75A2.625 2.625 0 0 1 5.125 5.5M2.5 8.5h19m-12.75 0v10m6.5-10v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.neee3pb_i {
  d: path("m2.5 18.5l3-3.5l3.25 3.5L12 15l3.25 3.5L18.5 15l3 3.5");
}
</style><g class="hntgybcog"><path class="ctkfkebuw"/><path class="neee3pb_i"/></g>`,
		"fallback": "uix:film-negative",
	});
}

export default Component;
