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
		"content": `<style>.tvbbqccgy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 7.5l9.5 8.5L8 20.5v-17L12.5 8L3 16.5M14.75 18l2 2L21 15.75");
}
</style><path class="tvbbqccgy"/>`,
		"fallback": "uix-sharp:bluetooth-check",
	});
}

export default Component;
