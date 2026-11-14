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

.o2_4vqe7h {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-3 0h.01M18 12h.01");
}

.selk_oake {
  d: path("M6 6h12a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 18 18H6a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 6 6");
}
</style><g class="hntgybcog"><path class="selk_oake"/><path class="o2_4vqe7h"/></g>`,
		"fallback": "uix:donate-banknote",
	});
}

export default Component;
