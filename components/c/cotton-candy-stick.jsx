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
		"content": `<style>.h8ib910nb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 15a3 3 0 0 1-4.25-3.75a3 3 0 0 1 1.25-5A3.25 3.25 0 0 1 12 4a3.25 3.25 0 0 1 6 2.25a3 3 0 0 1 1.25 5A3 3 0 0 1 15 15a3 3 0 0 1-6 0m3 3v3.5");
}
</style><path class="h8ib910nb"/>`,
		"fallback": "uix:cotton-candy-stick",
	});
}

export default Component;
