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
		"content": `<style>.lnh79mbon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.5 10.75v3.5l-3 1.25h-6L4 13l-.5-6h1.75l3 4h2.25l.5-1.5h4.25l2.5 1.25Zm0 1.75H21M21 9v7m-13-.5h9m-8.5 3h.01m2.99 0h.01m2.99 0h.01M10 21h.01M13 21h.01");
}
</style><path class="lnh79mbon"/>`,
		"fallback": "uix-sharp:crop-duster",
	});
}

export default Component;
