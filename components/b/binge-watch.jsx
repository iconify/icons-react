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
		"content": `<style>.e7oxddbzp {
  d: path("M6 9h12a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18v-5.5A3.5 3.5 0 0 1 6 9M4.5 6h15m-13-3h11");
}

.hfwq3dirc {
  d: path("m12.317 13.506l.748.486a1.5 1.5 0 0 1 0 2.516l-.748.486A1.5 1.5 0 0 1 10 15.736v-.972a1.5 1.5 0 0 1 2.317-1.258");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e7oxddbzp"/><path class="hfwq3dirc"/></g>`,
		"fallback": "uix:binge-watch",
	});
}

export default Component;
