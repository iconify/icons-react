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
		"content": `<style>.w57nsxp4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10h15a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1Zm3 0V7a4.5 4.5 0 0 1 9 0v3M9 14.25h6m-6 3h6");
}
</style><path class="w57nsxp4t"/>`,
		"fallback": "uix-sharp:constant",
	});
}

export default Component;
