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

.hoix_ablf {
  d: path("M7.75 9a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.lq_9l6rpk {
  d: path("M3.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m13 0v12.5l4-1.5v-8");
}
</style><g class="hntgybcog"><path class="lq_9l6rpk"/><path class="hoix_ablf"/></g>`,
		"fallback": "uix:hand-wraps",
	});
}

export default Component;
