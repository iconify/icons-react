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

.ie87xklmx {
  d: path("M9 16.75a3 3 0 0 1 6 0m-.75-2.25l4.5-4.5M12 13.75v-6.5M9.75 14.5L5.25 10");
}

.j-egtfbpv {
  d: path("M2.5 16.75a9.5 9.5 0 0 1 19 0Z");
}
</style><g class="hntgybcog"><path class="j-egtfbpv"/><path class="ie87xklmx"/></g>`,
		"fallback": "uix:colour-wheel-half",
	});
}

export default Component;
