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
		"content": `<style>.a35so_fny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.759 7.948l3.716 2.622a1.75 1.75 0 0 1 0 2.86l-3.716 2.622A1.75 1.75 0 0 1 3 14.623V9.377a1.75 1.75 0 0 1 2.759-1.429m9.5 0l3.716 2.622a1.75 1.75 0 0 1 0 2.86l-3.716 2.622a1.75 1.75 0 0 1-2.759-1.429V9.377a1.75 1.75 0 0 1 2.759-1.429");
}
</style><path class="a35so_fny"/>`,
		"fallback": "uix:fast-forward",
	});
}

export default Component;
