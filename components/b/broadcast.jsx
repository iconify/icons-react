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
		"content": `<style>.ysvcdq3-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h4.5l7-4.5v15l-7-4.5H3Zm3.5 6l1 4.5M17.564 9.429a4 4 0 0 1 0 5.142M19.862 7.5a7 7 0 0 1 0 9");
}
</style><path class="ysvcdq3-b"/>`,
		"fallback": "uix:broadcast",
	});
}

export default Component;
