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
		"content": `<style>.asucb3b6k {
  d: path("m8.437 4.771l5.122 2.955a2.625 2.625 0 0 1 0 4.548l-5.122 2.955A2.625 2.625 0 0 1 4.5 12.955v-5.91a2.625 2.625 0 0 1 3.937-2.274M14 18a4 4 0 1 0 8 0a4 4 0 1 0-8 0m0 0h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ivzpdhhtj {
  d: path("M15.25 15.25q2.75 2.75 0 5.5m5.5-5.5q-2.75 2.75 0 5.5");
}
</style><g class="hntgybcog"><path class="asucb3b6k"/><path class="ivzpdhhtj"/></g>`,
		"fallback": "uix:basketball-live",
	});
}

export default Component;
