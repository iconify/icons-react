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
		"content": `<style>.qjb8y_lww {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.125 3h7.75A2.625 2.625 0 0 1 18.5 5.625v3.75A2.625 2.625 0 0 1 15.875 12h-7.75A2.625 2.625 0 0 1 5.5 9.375v-3.75A2.625 2.625 0 0 1 8.125 3M5.5 12L3 15.5h18L18.5 12M4.125 18.25h15.75a1.625 1.625 0 0 1 1.625 1.625a1.625 1.625 0 0 1-1.625 1.625H4.125A1.625 1.625 0 0 1 2.5 19.875a1.625 1.625 0 0 1 1.625-1.625M12 15.5v2.75");
}
</style><path class="qjb8y_lww"/>`,
		"fallback": "uix:docking-station",
	});
}

export default Component;
