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
		"content": `<style>.vyus1kbsb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15H8m8 0h5.5M8 15h.01M16 15h.01M8 15l7-7");
}
</style><path class="vyus1kbsb"/>`,
		"fallback": "uix-sharp:circuit-symbol-switch",
	});
}

export default Component;
