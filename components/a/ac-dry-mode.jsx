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
		"content": `<style>.gsq68fp6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v1A3.5 3.5 0 0 1 18 11H6a3.5 3.5 0 0 1-3.5-3.5v-1A3.5 3.5 0 0 1 6 3m0 5h12m-6 6s-3 3-3 4.5a3 3 0 0 0 6 0c0-1.5-3-4.5-3-4.5");
}
</style><path class="gsq68fp6l"/>`,
		"fallback": "uix:ac-dry-mode",
	});
}

export default Component;
