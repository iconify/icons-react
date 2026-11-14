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
		"content": `<style>.hc1ewhbji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 14.75C7 10 9.5 3 15.5 3c4 0 6 2.5 5.5 6c-.5 5-7 7.5-11.75 5.75Zm0 0l-2.5 2.5m0 0a1.75 1.75 0 1 0-1.5 1.5a1.75 1.75 0 1 0 1.5-1.5Z");
}
</style><path class="hc1ewhbji"/>`,
		"fallback": "uix-sharp:fried-chicken-shop",
	});
}

export default Component;
