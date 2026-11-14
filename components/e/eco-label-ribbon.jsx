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
		"content": `<style>.fyrlk0i8z {
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x0wm1p3jg {
  d: path("m9.5 15l-1 6.5l3.5-2l3.5 2l-1-6.5m-5-3.5c0-3 2-5 5-5c0 3-2 5-5 5");
}
</style><g class="hntgybcog"><path class="fyrlk0i8z"/><path class="x0wm1p3jg"/></g>`,
		"fallback": "uix:eco-label-ribbon",
	});
}

export default Component;
