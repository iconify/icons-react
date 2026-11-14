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
		"content": `<style>.esa0accle {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 16V7a3 3 0 0 1 6 0v9Zm11 0V7a3 3 0 0 1 6 0v9Zm-8 0q0 4.5 5.5 4.5t5.5-4.5");
}
</style><path class="esa0accle"/>`,
		"fallback": "uix-sharp:ear-plugs",
	});
}

export default Component;
