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
		"content": `<style>.xvq1hzhct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.1 21H2.5V11h4.6m3.3-4.5H13V3h5v6.5h3.5v8.1M3.5 3.5l17 17");
}
</style><path class="xvq1hzhct"/>`,
		"fallback": "uix:blackout-city",
	});
}

export default Component;
