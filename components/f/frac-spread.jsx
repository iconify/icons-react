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
		"content": `<style>.nv2c7xa6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h19M11.25 5h1.5a1.75 1.75 0 0 1 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-1.5a1.75 1.75 0 0 1-1.75-1.75v-5A1.75 1.75 0 0 1 11.25 5m-1 8.5h3.5a1.75 1.75 0 0 1 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-4.5a1.75 1.75 0 0 1 1.75-1.75M9.5 9.25h-3m0-2v4m9 5.25H17c2.5 0 2-5.5 4.5-5.5");
}
</style><path class="nv2c7xa6i"/>`,
		"fallback": "uix:frac-spread",
	});
}

export default Component;
