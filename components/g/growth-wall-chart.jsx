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
		"content": `<style>.oggs-i-pm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h13v19h-13Zm0 4H8m-3.5 4H7m-2.5 4H8m-3.5 4H7m3.5-10H20");
}
</style><path class="oggs-i-pm"/>`,
		"fallback": "uix-sharp:growth-wall-chart",
	});
}

export default Component;
