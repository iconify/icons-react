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
		"content": `<style>.n9odt3bsb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0m-16 5h1.5A1.5 1.5 0 0 1 8 13v1.5A1.5 1.5 0 0 1 6.5 16H5a1.5 1.5 0 0 1-1.5-1.5V13A1.5 1.5 0 0 1 5 11.5m3 .5h6c2.5 0 4.5 1 5.5 3c-2-.5-3.5.5-5.5.5H8m3 0v6");
}
</style><path class="n9odt3bsb"/>`,
		"fallback": "uix:hardware-store",
	});
}

export default Component;
