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
		"content": `<style>.km7aqru9q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12h.01M7 12h.01M16 12h5.5M10 8.5l3 3.5l-3 3.5");
}
</style><path class="km7aqru9q"/>`,
		"fallback": "uix:breadcrumb-collapsed",
	});
}

export default Component;
