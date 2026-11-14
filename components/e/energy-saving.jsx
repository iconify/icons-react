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

.kuc0_9bqn {
  d: path("M10 12.5c0-3.5 1.5-5 4.5-5.5c0 3-1.5 5-4.5 5.5");
}

.vbh3wac6q {
  d: path("M9 18v-3.25a6.5 6.5 0 1 1 6 0V18Zm.5 3h5");
}
</style><g class="hntgybcog"><path class="vbh3wac6q"/><path class="kuc0_9bqn"/></g>`,
		"fallback": "uix:energy-saving",
	});
}

export default Component;
