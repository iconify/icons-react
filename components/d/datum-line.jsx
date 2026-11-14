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
		"content": `<style>.j3uwh6joc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.811 7.5h.878a1.75 1.75 0 0 1 1.446 2.736l-.439.643a1.75 1.75 0 0 1-2.892 0l-.439-.643A1.75 1.75 0 0 1 5.811 7.5m-3.311 9h6m3 0h.01m2.99 0h7");
}
</style><path class="j3uwh6joc"/>`,
		"fallback": "uix:datum-line",
	});
}

export default Component;
