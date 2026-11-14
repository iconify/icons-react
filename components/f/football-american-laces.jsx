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
		"content": `<style>.i9a1vm1ih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12C6 5 18 5 21.5 12C18 19 6 19 2.5 12m5 0h9M9 10v4m3-4v4m3-4v4");
}
</style><path class="i9a1vm1ih"/>`,
		"fallback": "uix:football-american-laces",
	});
}

export default Component;
