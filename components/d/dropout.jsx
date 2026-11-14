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
		"content": `<style>.gdax4f4pc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm11.5 3a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-9.5 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm3-11.25l6.5 1.5M6.5 8l1 7m8.25-4.75l-6 5.5M15 15l6 6m0-6l-6 6");
}
</style><path class="gdax4f4pc"/>`,
		"fallback": "uix-sharp:dropout",
	});
}

export default Component;
