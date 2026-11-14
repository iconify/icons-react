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
		"content": `<style>.b5w-8abrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9V7.5a5 5 0 0 1 10 0v9a5 5 0 0 1-10 0V15m2.5-6.5l-1 7");
}
</style><path class="b5w-8abrb"/>`,
		"fallback": "uix-sharp:carabiner",
	});
}

export default Component;
