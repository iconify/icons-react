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
		"content": `<style>.h29t5ibjb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h12A1.5 1.5 0 0 1 19.5 5A1.5 1.5 0 0 1 18 6.5H6A1.5 1.5 0 0 1 4.5 5A1.5 1.5 0 0 1 6 3.5m1 3v11m-1 0h12a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 19A1.5 1.5 0 0 1 6 17.5");
}
</style><path class="h29t5ibjb"/>`,
		"fallback": "uix:c-table",
	});
}

export default Component;
