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
		"content": `<style>.hnet40a7k {
  d: path("M5 10a5 3 0 0 1 10 0v10a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 20Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n5ppr-89k {
  d: path("M10 4za1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 10 7a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 10 4m4.5 0L20 2.5m-3 4.25l4.5.5");
}
</style><g class="hntgybcog"><path class="hnet40a7k"/><path class="n5ppr-89k"/></g>`,
		"fallback": "uix:deodorant-spray",
	});
}

export default Component;
