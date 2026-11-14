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

.jjoofaczw {
  d: path("M2.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.mr2ny5zbi {
  d: path("M6 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.75 7.5h2.5A1.75 1.75 0 0 1 21 17.25v2.25a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.5v-2.25a1.75 1.75 0 0 1 1.75-1.75M15 17.75h6m-4.25-3.25V16m2.5-1.5V16");
}
</style><g class="hntgybcog"><path class="jjoofaczw"/><path class="mr2ny5zbi"/></g>`,
		"fallback": "uix:blue-moon",
	});
}

export default Component;
