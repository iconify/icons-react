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
		"content": `<style>.rpdjmqugy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8.5V6A2.5 2.5 0 0 1 6 3.5h2.5m7 0H18A2.5 2.5 0 0 1 20.5 6v2.5m0 7V18a2.5 2.5 0 0 1-2.5 2.5h-2.5m-7 0H6A2.5 2.5 0 0 1 3.5 18v-2.5");
}
</style><path class="rpdjmqugy"/>`,
		"fallback": "uix-sharp:fullscreen",
	});
}

export default Component;
