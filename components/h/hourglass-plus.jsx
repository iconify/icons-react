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
		"content": `<style>.cno3vqbji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h8v2c0 2.5-2 5-4 7c2 2 4 4.5 4 7v2H5v-2c0-2.5 2-5 4-7c-2-2-4-4.5-4-7ZM3.5 3h11m-11 18h11m4-12v6m-3-3h6");
}
</style><path class="cno3vqbji"/>`,
		"fallback": "uix-sharp:hourglass-plus",
	});
}

export default Component;
