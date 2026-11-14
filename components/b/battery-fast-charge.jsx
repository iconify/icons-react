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
		"content": `<style>.f15wrccqb {
  d: path("M6.875 7h7.75A4.375 4.375 0 0 1 19 11.375v1.25A4.375 4.375 0 0 1 14.625 17h-7.75A4.375 4.375 0 0 1 2.5 12.625v-1.25A4.375 4.375 0 0 1 6.875 7M21.5 10.5v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jbmt-ydqg {
  d: path("m13.25 9l-2 3h3l-2 3M5.5 10.5h3.25m-3.25 3h2.25");
}
</style><g class="hntgybcog"><path class="f15wrccqb"/><path class="jbmt-ydqg"/></g>`,
		"fallback": "uix:battery-fast-charge",
	});
}

export default Component;
