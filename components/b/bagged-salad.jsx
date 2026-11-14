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
		"content": `<style>.ryhwo5ari {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21.5C4.5 17 4.75 13 6 9l1.5 1.5L9 9l1.5 1.5L12 9l1.5 1.5L15 9l1.5 1.5L18 9c1.25 4 1.5 8 .5 12.5ZM12 9c-2.5-4 .5-6.5 6.5-6.5C18.5 7 16 9 15 9");
}
</style><path class="ryhwo5ari"/>`,
		"fallback": "uix-sharp:bagged-salad",
	});
}

export default Component;
