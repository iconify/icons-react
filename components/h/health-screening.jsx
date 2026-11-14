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

.w29z0rb2l {
  d: path("M6 21.5V6a3.5 3.5 0 0 1 3.5-3.5h5A3.5 3.5 0 0 1 18 6v15.5m-14.5 0h17");
}

.zvob9cxwm {
  d: path("M8.75 10h1.5l1.25-3l1.5 6l1.25-3h1M9.5 17h5");
}
</style><g class="hntgybcog"><path class="w29z0rb2l"/><path class="zvob9cxwm"/></g>`,
		"fallback": "uix:health-screening",
	});
}

export default Component;
