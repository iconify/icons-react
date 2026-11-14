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
		"content": `<style>.djjvf2vya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10.5c-3-6-8.5-6-8.5-2c0 3 4.5 4 8.5 2m0 0c3-6 8.5-6 8.5-2c0 3-4.5 4-8.5 2m0 0l-5.5 9m5.5-9l5.5 9");
}
</style><path class="djjvf2vya"/>`,
		"fallback": "uix:alpine-butterfly-knot",
	});
}

export default Component;
