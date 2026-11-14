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
		"content": `<style>.p_rk1t--x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 7h8.5a5.25 5.25 0 0 1 5.25 5.25a5.25 5.25 0 0 1-5.25 5.25h-8.5a5.25 5.25 0 0 1-5.25-5.25A5.25 5.25 0 0 1 7.75 7m-.25 3.25v4m-2-2h4m6-1.25h.01M18 13.5h.01");
}
</style><path class="p_rk1t--x"/>`,
		"fallback": "uix:gadget-console-cover",
	});
}

export default Component;
