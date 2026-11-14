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
		"content": `<style>.q5ekuhbxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 10a6.5 6.5 0 0 1 13 0m-13 0za3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3m13 0za3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3");
}
</style><path class="q5ekuhbxo"/>`,
		"fallback": "uix:ear-defenders-lab",
	});
}

export default Component;
