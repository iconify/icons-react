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
		"content": `<style>.y_ar6piop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h17v7h-17ZM8 6h8m-4 6.5V21m-4.5-8.5L5 20m11.5-7.5L19 20");
}
</style><path class="y_ar6piop"/>`,
		"fallback": "uix-sharp:emergency-lighting",
	});
}

export default Component;
