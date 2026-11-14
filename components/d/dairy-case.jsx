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

.k4ivzvbgl {
  d: path("M2.5 7.5v14h19v-14m-19 9h19");
}

.mu556-0wk {
  d: path("M5.5 16.5v-4c0-1 1-1.5 1-2.25V9H8v1.25C8 11 9 11.5 9 12.5v4m2 0V11l1.75-2l1.75 2v5.5m4.25-7.75v4.5m-2-3.5l4 2.5m-4 0l4-2.5");
}
</style><g class="hntgybcog"><path class="k4ivzvbgl"/><path class="mu556-0wk"/></g>`,
		"fallback": "uix:dairy-case",
	});
}

export default Component;
