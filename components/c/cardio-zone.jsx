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
		"content": `<style>.a-uoxcbvo {
  d: path("m12 20l-7.75-8C2 9.5 2.5 4.5 7 4c2.5-.25 4 1.25 5 2.5c1-1.25 2.5-2.75 5-2.5c4.5.5 5 5.5 2.75 8Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdz-k04xc {
  d: path("M4.25 12H8l1.75-3l2.75 6l1.75-4.5L15.5 12h4.25");
}
</style><g class="hntgybcog"><path class="a-uoxcbvo"/><path class="zdz-k04xc"/></g>`,
		"fallback": "uix:cardio-zone",
	});
}

export default Component;
