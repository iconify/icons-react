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
		"content": `<style>.l2278gb6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.875 7.5h.25a4.375 4.375 0 0 1 4.375 4.375v.25a4.375 4.375 0 0 1-4.375 4.375h-.25A4.375 4.375 0 0 1 7.5 12.125v-.25A4.375 4.375 0 0 1 11.875 7.5M10 7.5v-5h4v5m-4 9v5h4v-5M5 9a4.5 4.5 0 0 0 0 6m14-6a4.5 4.5 0 0 1 0 6");
}
</style><path class="l2278gb6q"/>`,
		"fallback": "uix:haptic-wristband",
	});
}

export default Component;
