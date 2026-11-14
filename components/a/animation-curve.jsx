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
		"content": `<style>.hjkpwtbhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 18.5c5.5 0 4.5-13 10-13m-11 12za1.414 1.414 0 0 1 0 2a1.414 1.414 0 0 1-2 0a1.414 1.414 0 0 1 0-2a1.414 1.414 0 0 1 2 0m14-13za1.414 1.414 0 0 1 0 2a1.414 1.414 0 0 1-2 0a1.414 1.414 0 0 1 0-2a1.414 1.414 0 0 1 2 0");
}
</style><path class="hjkpwtbhh"/>`,
		"fallback": "uix:animation-curve",
	});
}

export default Component;
