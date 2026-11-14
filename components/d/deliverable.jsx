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

.ru5jm4d0z {
  d: path("M5.5 3.5h13A2.5 2.5 0 0 1 21 6a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 6a2.5 2.5 0 0 1 2.5-2.5m-1 5v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-10");
}

.segm6mgwt {
  d: path("m8.5 14l2.5 2.5l4.5-4.5");
}
</style><g class="hntgybcog"><path class="ru5jm4d0z"/><path class="segm6mgwt"/></g>`,
		"fallback": "uix:deliverable",
	});
}

export default Component;
