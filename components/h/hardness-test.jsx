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
		"content": `<style>.zw-821apb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3.5h6V10l-3 5l-3-5ZM2.5 16H8a4 4 0 0 0 8 0h5.5M9 10h6");
}
</style><path class="zw-821apb"/>`,
		"fallback": "uix:hardness-test",
	});
}

export default Component;
