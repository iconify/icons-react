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
		"content": `<style>.b9nk__b0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4h15l-5.25 7.25V17l-3.5 2v-7.75ZM16 21.5v-3m2.75 3v-5.75m2.75 5.75v-8");
}
</style><path class="b9nk__b0x"/>`,
		"fallback": "uix:analytics-funnel",
	});
}

export default Component;
