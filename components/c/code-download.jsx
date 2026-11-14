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
		"content": `<style>.xrb_d4irp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 7l-5 5l5 5m8-10l5 5l-.798.798M14 4.5l-4 15m8-5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="xrb_d4irp"/>`,
		"fallback": "uix:code-download",
	});
}

export default Component;
