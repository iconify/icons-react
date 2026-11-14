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

.n07a2bbyn {
  d: path("M8.75 14.25h6.5a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-6.5a1.5 1.5 0 0 1-1.5-1.5v-.5a1.5 1.5 0 0 1 1.5-1.5M4.5 13h-2m2 3h-2m2 3h-2m17-6h2m-2 3h2m-2 3h2");
}

.ybyy87bqn {
  d: path("M6.25 11.5h11.5a1.75 1.75 0 0 1 1.75 1.75v5.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75v-5.5a1.75 1.75 0 0 1 1.75-1.75m-1.75-3l7.5-5l7.5 5");
}
</style><g class="hntgybcog"><path class="ybyy87bqn"/><path class="n07a2bbyn"/></g>`,
		"fallback": "uix:carpet-boost",
	});
}

export default Component;
