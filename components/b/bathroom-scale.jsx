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

.othyik_wj {
  d: path("M7.5 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m4.5 0l1.5-1.75m-7 9.25h3m5 0h3");
}

.u-s9u8vws {
  d: path("M7.75 2.5h8.5a5.25 5.25 0 0 1 5.25 5.25v8.5a5.25 5.25 0 0 1-5.25 5.25h-8.5a5.25 5.25 0 0 1-5.25-5.25v-8.5A5.25 5.25 0 0 1 7.75 2.5");
}
</style><g class="hntgybcog"><path class="u-s9u8vws"/><path class="othyik_wj"/></g>`,
		"fallback": "uix:bathroom-scale",
	});
}

export default Component;
