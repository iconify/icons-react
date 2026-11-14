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
		"content": `<style>.kt6id9rgo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18L17 12H7Zm7.5-18h3V12h-3Zm-3 15h9");
}
</style><path class="kt6id9rgo"/>`,
		"fallback": "uix-sharp:dustpan",
	});
}

export default Component;
