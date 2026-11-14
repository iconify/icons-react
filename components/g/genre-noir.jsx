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
		"content": `<style>.ou4h4wmgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 14.5l1-7Q9.75 5 12 7q2.25-2 4.5.5l1 7m-15 0q1.5 3 9.5 3t9.5-3M7 11.5h10");
}
</style><path class="ou4h4wmgl"/>`,
		"fallback": "uix-sharp:genre-noir",
	});
}

export default Component;
