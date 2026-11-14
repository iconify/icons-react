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

.t9_fn9bht {
  d: path("M4 6a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 6v8a2.5 2.5 0 0 1-2.5 2.5H11L7 20v-3.5h-.5A2.5 2.5 0 0 1 4 14Zm5.5 1.5h.01m4.99 0h.01");
}

.tnkma-r1q {
  d: path("M8.75 10.75q3.25 3.5 6.5 0");
}
</style><g class="hntgybcog"><path class="t9_fn9bht"/><path class="tnkma-r1q"/></g>`,
		"fallback": "uix:call-sentiment",
	});
}

export default Component;
