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
		"content": `<style>.qrksbek_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 18H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 15m-.25-8.5H7.5L7 15H4.25Zm6.5 0H14l-.5 8.5h-2.75Zm6.5 0h3.75L20 15h-2.75Z");
}
</style><path class="qrksbek_e"/>`,
		"fallback": "uix:beer-flight",
	});
}

export default Component;
