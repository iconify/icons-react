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
		"content": `<style>.g6-0ijbeg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.99 13.061l7.071-7.071a3.5 3.5 0 0 1 4.949 0a3.5 3.5 0 0 1 0 4.949l-7.071 7.071a3.5 3.5 0 0 1-4.949 0a3.5 3.5 0 0 1 0-4.949m3.535-3.536l4.95 4.95");
}
</style><path class="g6-0ijbeg"/>`,
		"fallback": "uix:health-prescription",
	});
}

export default Component;
