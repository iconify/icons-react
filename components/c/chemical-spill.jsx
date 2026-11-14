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

.kpzx4fb5j {
  d: path("M5.125 4h5.75A2.625 2.625 0 0 1 13.5 6.625v1.75A2.625 2.625 0 0 1 10.875 11h-5.75A2.625 2.625 0 0 1 2.5 8.375v-1.75A2.625 2.625 0 0 1 5.125 4M13.5 6H16v3h-2.5M16 7.5q3 .5 3 8.25");
}

.noxf0oi5t {
  d: path("M5.5 17.5a8 2.5 0 1 0 16 0a8 2.5 0 1 0-16 0");
}
</style><g class="hntgybcog"><path class="kpzx4fb5j"/><path class="noxf0oi5t"/></g>`,
		"fallback": "uix:chemical-spill",
	});
}

export default Component;
