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
		"content": `<style>.n5zbwsb4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Zm2.5 0V6a2.5 2.5 0 0 1 5 0M7 19.5V21m10-1.5V21");
}
</style><path class="n5zbwsb4t"/>`,
		"fallback": "uix-sharp:bathtub",
	});
}

export default Component;
