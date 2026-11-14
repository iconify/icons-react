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
		"content": `<style>.ciqgk_8cj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10h17m-16 0v8.5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V10M14 14.5L6.5 3");
}
</style><path class="ciqgk_8cj"/>`,
		"fallback": "uix-sharp:bikini-wax",
	});
}

export default Component;
