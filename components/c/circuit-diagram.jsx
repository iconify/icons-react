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
		"content": `<style>.s6tywkbrn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 6H4v12h3.5l1.25-2.5l2.25 5l2-5l2.25 5L16.5 18H20V6h-6.75m-2.5-3v6m2.5-4.5v3");
}
</style><path class="s6tywkbrn"/>`,
		"fallback": "uix-sharp:circuit-diagram",
	});
}

export default Component;
