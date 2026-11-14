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
		"content": `<style>.ghvh3z39t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l5.5 5.5l-5.5 5.5l-5.5-5.5Zm-8 14.5h16M4 21h10");
}
</style><path class="ghvh3z39t"/>`,
		"fallback": "uix-sharp:component-description",
	});
}

export default Component;
