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
		"content": `<style>.r395mcb5d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm-3 13.5c0-4 3-6.75 7-6.75c2.44 0 4.508 1.023 5.75 2.729M18 14.75v3.5M18 21h.01");
}
</style><path class="r395mcb5d"/>`,
		"fallback": "uix-sharp:citizen-complaint",
	});
}

export default Component;
