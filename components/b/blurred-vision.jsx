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

.jcoe2sbht {
  d: path("M2.5 10.5c2.5-4 6-6 9.5-6s7 2 9.5 6c-2.5 4-6 6-9.5 6s-7-2-9.5-6");
}

.xu73sue0p {
  d: path("M4 16c2.5 2.5 5.25 3.75 8 3.75s5.5-1.25 8-3.75M9.25 10.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m2.75 0h.01");
}
</style><g class="hntgybcog"><path class="jcoe2sbht"/><path class="xu73sue0p"/></g>`,
		"fallback": "uix:blurred-vision",
	});
}

export default Component;
