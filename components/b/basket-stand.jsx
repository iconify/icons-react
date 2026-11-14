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
		"content": `<style>.xd2gynmzr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.814 13h12.372a2.625 2.625 0 0 1 2.555 3.226l-.765 3.25a2.625 2.625 0 0 1-2.555 2.024H6.579a2.625 2.625 0 0 1-2.555-2.024l-.765-3.25A2.625 2.625 0 0 1 5.814 13M3 13l-.5-3.5h19L21 13M3 9.5L2.5 6h19L21 9.5M7 6l2.5-3.5M17 6l-2.5-3.5M8 15.5V19m4-3.5V19m4-3.5V19");
}
</style><path class="xd2gynmzr"/>`,
		"fallback": "uix:basket-stand",
	});
}

export default Component;
