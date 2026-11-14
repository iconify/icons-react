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
		"content": `<style>.g-vq-eb9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 13h4v1.5h-.5l-.5 6h-2l-.5-6h-.5ZM9 9.5h4.75V11h-.5l-.75 9.5h-2.25L9.5 11H9ZM16.5 5H22v1.5h-.5l-.75 14h-3L17 6.5h-.5Z");
}
</style><path class="g-vq-eb9r"/>`,
		"fallback": "uix:cup-sizes",
	});
}

export default Component;
