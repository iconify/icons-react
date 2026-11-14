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

.j8r4dqbhu {
  d: path("M2.5 10v7h10.6m5.4-3.4V10m-8 7v3.5m-2.5 0h4.7m2.8-5l5 5m0-5l-5 5");
}

.pfeq3102n {
  d: path("M8.625 3h3.75A2.625 2.625 0 0 1 15 5.625v5.25a2.625 2.625 0 0 1-2.625 2.625h-3.75A2.625 2.625 0 0 1 6 10.875v-5.25A2.625 2.625 0 0 1 8.625 3");
}
</style><g class="hntgybcog"><path class="pfeq3102n"/><path class="j8r4dqbhu"/></g>`,
		"fallback": "uix:cinema-seats-x",
	});
}

export default Component;
