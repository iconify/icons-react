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
		"content": `<style>.e96a1abai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.5v5a2.5 2.5 0 0 0 5 0v-5m-2.5 0v19M10.5 6.75a3 4.25 0 1 0 6 0a3 4.25 0 1 0-6 0m3 4.25v10.5m3 0c0-4 1.5-5.5 5.5-5.5c0 4-1.5 5.5-5.5 5.5");
}
</style><path class="e96a1abai"/>`,
		"fallback": "uix:bamboo-cutlery",
	});
}

export default Component;
