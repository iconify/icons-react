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

.jgdvtfbec {
  d: path("M2.5 3h19M9 9.5l4-3.25L10.5 3m-8 15v-6.5a2 2 0 0 1 2-2H17l4.5 4.5v4Z");
}

.xu-lgjb_l {
  d: path("M5 20a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="jgdvtfbec"/><path class="xu-lgjb_l"/></g>`,
		"fallback": "uix:electric-locomotive",
	});
}

export default Component;
