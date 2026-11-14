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

.yssyf8lqd {
  d: path("M6.875 4.5h10.25A4.375 4.375 0 0 1 21.5 8.875v6.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 15.125v-6.25A4.375 4.375 0 0 1 6.875 4.5");
}

.z6_vblfzf {
  d: path("M6 15.5a6 6 0 0 1 12 0m-6 0l2.25-2.25M12 15.5h.01");
}
</style><g class="hntgybcog"><path class="yssyf8lqd"/><path class="z6_vblfzf"/></g>`,
		"fallback": "uix:data-plan-5g",
	});
}

export default Component;
