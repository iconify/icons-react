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

.jl05csb9h {
  d: path("M6.25 20.5v-2c0-2.6 1.55-4.9 4-5.75a3 3 0 1 1 3.5 0c2.45.85 4 3.15 4 5.75v2");
}

.mtvi81ccy {
  d: path("M9.625 3.5h4.75A6.125 6.125 0 0 1 20.5 9.625v4.75a6.125 6.125 0 0 1-6.125 6.125h-4.75A6.125 6.125 0 0 1 3.5 14.375v-4.75A6.125 6.125 0 0 1 9.625 3.5");
}
</style><g class="hntgybcog"><path class="mtvi81ccy"/><path class="jl05csb9h"/></g>`,
		"fallback": "uix:avatar-square",
	});
}

export default Component;
