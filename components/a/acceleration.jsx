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
		"content": `<style>.y3b8eqbwi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 12H20m-4-4.5l4.5 4.5l-4.5 4.5M5 8h6m-8.5 4h4M4 16h5");
}
</style><path class="y3b8eqbwi"/>`,
		"fallback": "uix-sharp:acceleration",
	});
}

export default Component;
