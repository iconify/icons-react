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
		"content": `<style>.b2n25wjjg {
  d: path("M8.875 10h6.25a4.375 4.375 0 0 1 4.375 4.375v2.75a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 17.125v-2.75A4.375 4.375 0 0 1 8.875 10M7.5 10V7a4.5 4.5 0 0 1 9 0v3");
}

.ev9-c65rh {
  d: path("M10.5 14.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M12 16v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b2n25wjjg"/><path class="ev9-c65rh"/></g>`,
		"fallback": "uix:encryption-lock",
	});
}

export default Component;
