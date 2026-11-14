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
		"content": `<style>.lsvqptbiw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7.5h3.5A3.5 3.5 0 0 1 13 11v2a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13v-2A3.5 3.5 0 0 1 6 7.5m3 0v9m12.5-10L16 12l5.5 5.5");
}
</style><path class="lsvqptbiw"/>`,
		"fallback": "uix:focal-length",
	});
}

export default Component;
