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
		"content": `<style>.hh-k-ubib {
  d: path("m8 11.5l4-4l4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tu38j1bdj {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m9.5 4.5v-9");
}
</style><g class="hntgybcog"><path class="tu38j1bdj"/><path class="hh-k-ubib"/></g>`,
		"fallback": "uix:arrow-up-circle",
	});
}

export default Component;
