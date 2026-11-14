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
		"content": `<style>.auuculbkg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21h2.5l1.5-4.25L8 15c1.25-2.5 4.5-5.75 7-7l1.75 2L21 8.5V6c0-1.65-1.35-3-3-3c-8.25.5-14.5 6.75-15 15c0 1.65 1.35 3 3 3m12.25-6v6m-3-3h6");
}
</style><path class="auuculbkg"/>`,
		"fallback": "uix:call-ambulance",
	});
}

export default Component;
