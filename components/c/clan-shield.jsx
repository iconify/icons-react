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
		"content": `<style>.zow-mge_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9h15v4c0 4-3.5 6.75-7.5 8.5C8 19.75 4.5 17 4.5 13ZM8 9l-.5-5.5L10 6l2-3l2 3l2.5-2.5L16 9");
}
</style><path class="zow-mge_x"/>`,
		"fallback": "uix:clan-shield",
	});
}

export default Component;
