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
		"content": `<style>.bmd4x5wfl {
  d: path("M10.5 16v-3.5h3V16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y8s0ybc1m {
  d: path("M7.5 16V9.5L12 4l4.5 5.5V16M4.25 16h15.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 4.25 16m3.25 0v4.5m9-4.5v4.5");
}
</style><g class="hntgybcog"><path class="y8s0ybc1m"/><path class="bmd4x5wfl"/></g>`,
		"fallback": "uix:base-building",
	});
}

export default Component;
