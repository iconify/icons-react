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
		"content": `<style>.dcyd4iagx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3v18.5m0-17C9 2 12 7 19 4.5v9C12 16 9 11 5 13.5");
}
</style><path class="dcyd4iagx"/>`,
		"fallback": "uix:flag-waving",
	});
}

export default Component;
