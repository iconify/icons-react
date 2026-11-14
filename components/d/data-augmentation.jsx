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

.k97cm6pbo {
  d: path("M6 10h5.75a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18v-4.5A3.5 3.5 0 0 1 6 10");
}

.kxw59qbgq {
  d: path("M5.5 18.5L8.75 15l3.5 3.5M5.5 7H16a2 2 0 0 1 2 2v9.5");
}

.mpmc0j4to {
  d: path("m10 2.5l11.5 1.75l-.5 8.25");
}
</style><g class="hntgybcog"><path class="k97cm6pbo"/><path class="kxw59qbgq"/><path class="mpmc0j4to"/></g>`,
		"fallback": "uix:data-augmentation",
	});
}

export default Component;
