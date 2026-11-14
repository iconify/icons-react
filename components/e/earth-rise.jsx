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

.j8r31xy3h {
  d: path("M2.5 19.5q9.5-4 19 0M7 9.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.pvn1s7hon {
  d: path("M9.75 9.5a2.25 5 0 1 0 4.5 0a2.25 5 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="j8r31xy3h"/><path class="pvn1s7hon"/></g>`,
		"fallback": "uix:earth-rise",
	});
}

export default Component;
