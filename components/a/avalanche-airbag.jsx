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

.i1i6vsboe {
  d: path("M10.375 11h3.25A4.375 4.375 0 0 1 18 15.375v1.75a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125v-1.75A4.375 4.375 0 0 1 10.375 11");
}

.le6zdmbko {
  d: path("M8.5 11C5 11.5 3 8.5 5 6.25C5 3.5 8.5 2 10.5 3.75c1.5-1.75 5-1.5 6 .75c3 0 4.5 4 2 5.75c-.75.75-1.75.75-3 .75M9 21.5v-4h6v4");
}
</style><g class="hntgybcog"><path class="i1i6vsboe"/><path class="le6zdmbko"/></g>`,
		"fallback": "uix:avalanche-airbag",
	});
}

export default Component;
