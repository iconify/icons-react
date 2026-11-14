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
		"content": `<style>.b8r3ssbnt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h14.5m-11-3.5L3 12l3.5 3.5m7.5-7l3.5 3.5l-3.5 3.5M21 5v14");
}
</style><path class="b8r3ssbnt"/>`,
		"fallback": "uix:arrow-left-right-line",
	});
}

export default Component;
