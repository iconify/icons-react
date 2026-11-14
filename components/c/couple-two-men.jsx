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
		"content": `<style>.ligps7bcu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-2 11.5c0-3.25 2.25-5 5-5s4.5 1.75 4.5 5M13.5 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM12 19.5c0-3.25 1.75-5 4.5-5s5 1.75 5 5");
}
</style><path class="ligps7bcu"/>`,
		"fallback": "uix-sharp:couple-two-men",
	});
}

export default Component;
