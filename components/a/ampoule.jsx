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
		"content": `<style>.oyswk4b2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 9c0 1.5-2.5 2-2.5 4.5v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6c0-2.5-2.5-3-2.5-4.5V5.5c0-2-1.5-3-1.5-3s-1.5 1-1.5 3ZM8 15.5h8");
}
</style><path class="oyswk4b2g"/>`,
		"fallback": "uix-sharp:ampoule",
	});
}

export default Component;
