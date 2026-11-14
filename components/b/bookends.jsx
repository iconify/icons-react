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
		"content": `<style>.cnvw-8ber {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6v14.5H9.5V6h-4v14.5M21.25 6v14.5H12.5L14.75 9h3.75l-2.25 11.5");
}
</style><path class="cnvw-8ber"/>`,
		"fallback": "uix-sharp:bookends",
	});
}

export default Component;
