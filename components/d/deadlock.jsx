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
		"content": `<style>.cllxm0byq {
  d: path("M10 10.5V7a4 4 0 0 1 8 0v3.5m-6 4v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iu0rxjxlb {
  d: path("M7.875 10.5h8.25a4.375 4.375 0 0 1 4.375 4.375v2.25a4.375 4.375 0 0 1-4.375 4.375h-8.25A4.375 4.375 0 0 1 3.5 17.125v-2.25A4.375 4.375 0 0 1 7.875 10.5M6 10.5V7a4 4 0 0 1 8 0v3.5");
}
</style><g class="hntgybcog"><path class="iu0rxjxlb"/><path class="cllxm0byq"/></g>`,
		"fallback": "uix:deadlock",
	});
}

export default Component;
