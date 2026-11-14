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
		"content": `<style>.sx0xhkbxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h19M8 8c0-4 1.5-5 4-5s4 1 4 5M8 8v2.5a4 4 0 0 0 8 0V8M4.5 21.5c0-2.5 3.25-4.25 7.5-4.25s7.5 1.75 7.5 4.25");
}
</style><path class="sx0xhkbxo"/>`,
		"fallback": "uix:farm-worker",
	});
}

export default Component;
