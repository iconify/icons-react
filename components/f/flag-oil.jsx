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
		"content": `<style>.gwea8g1nu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m0-18C7 2 9 2 12 3.5s5 1.5 8 0V10q-.637.319-1.222.548m-1.894.515C15.323 11.28 13.852 10.926 12 10c-3-1.5-5-1.5-8 0m14 4c1.5 1.75 3 3.25 3 5a3 3 0 0 1-6 0c0-1.75 1.5-3.25 3-5Z");
}
</style><path class="gwea8g1nu"/>`,
		"fallback": "uix-sharp:flag-oil",
	});
}

export default Component;
