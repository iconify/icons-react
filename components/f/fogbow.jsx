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
		"content": `<style>.qp6h9sp6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12a8.5 8.5 0 0 1 17 0m-17 3.5q2-1.5 4 0t4 0t4 0t4 0m-13 4.25q2-1.5 4 0t4 0t4 0");
}
</style><path class="qp6h9sp6t"/>`,
		"fallback": "uix-sharp:fogbow",
	});
}

export default Component;
