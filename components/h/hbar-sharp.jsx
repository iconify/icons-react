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
		"content": `<style>.gi5qvbcju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.25v17.5M8 14c0-2.75 2-4.75 4.75-4.75s4.75 2 4.75 4.75v6.75m-13-12.5l8.5-3");
}
</style><path class="gi5qvbcju"/>`,
		"fallback": "iconoven:hbar-sharp",
	});
}

export default Component;
