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
		"content": `<style>.ehyfgubvr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 13.25v-8.5a2.5 2.5 0 0 1 5 0v8.5a4.5 4.5 0 1 1-5 0m2.5-4.75v8.25M16 8.5h2.5");
}
</style><path class="ehyfgubvr"/>`,
		"fallback": "uix:fundraising-thermometer",
	});
}

export default Component;
