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

.jngo01bnw {
  d: path("M10.5 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m1.5 1.5v5M4 21c4-2 12 2 16 0");
}

.k8cs8xb0j {
  d: path("M10.25 2.5h3.5a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 8.5 4.75v-.5a1.75 1.75 0 0 1 1.75-1.75m1.75 15l-5.5-6l2.5-5h6l2.5 5Z");
}
</style><g class="hntgybcog"><path class="k8cs8xb0j"/><path class="jngo01bnw"/></g>`,
		"fallback": "uix:calligraphy-pen",
	});
}

export default Component;
