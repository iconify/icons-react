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
		"content": `<style>.d-l98sqlu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19.341 6.59l-1.172 3.127a.765.765 0 0 1-1.419.033l-.514-1.199a1.5 1.5 0 0 0-.787-.787L14.25 7.25a.765.765 0 0 1 .033-1.419l3.127-1.172a1.5 1.5 0 0 1 1.931 1.931M16 8L3.5 20.5");
}
</style><path class="d-l98sqlu"/>`,
		"fallback": "uix:arrowhead-stone",
	});
}

export default Component;
