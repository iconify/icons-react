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
		"content": `<style>.lcbvvybnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16c0-3 2-3 3.5-1.5h12c1.5-1.5 3.5-1.5 3.5 1.5v2.5a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2ZM8 11.5q-1-2 0-4t0-4m4 8q-1-2 0-4t0-4m4 8q-1-2 0-4t0-4");
}
</style><path class="lcbvvybnn"/>`,
		"fallback": "uix:heated-pet-bed",
	});
}

export default Component;
