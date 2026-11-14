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
		"content": `<style>.di79a7j8v {
  d: path("M3.5 17V7.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_r739bik {
  d: path("m5.5 9l6.5 5l6.5-5");
}
</style><g class="hntgybcog"><path class="di79a7j8v"/><path class="v_r739bik"/></g>`,
		"fallback": "uix:admission-letter",
	});
}

export default Component;
