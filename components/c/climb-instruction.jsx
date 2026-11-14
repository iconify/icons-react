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
		"content": `<style>.co3_zcc8i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21V3.5M3.5 8L8 3.5L12.5 8M17 3.5V21m0-13h3m-3 5h3m-3 5h3");
}
</style><path class="co3_zcc8i"/>`,
		"fallback": "uix:climb-instruction",
	});
}

export default Component;
