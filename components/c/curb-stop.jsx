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
		"content": `<style>.oasab4kca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14H15v5h6.5M7.25 9h1.5a1.75 1.75 0 0 1 1.75 1.75v1.5A1.75 1.75 0 0 1 8.75 14h-1.5a1.75 1.75 0 0 1-1.75-1.75v-1.5A1.75 1.75 0 0 1 7.25 9M8 9V5M5 5h6");
}
</style><path class="oasab4kca"/>`,
		"fallback": "uix:curb-stop",
	});
}

export default Component;
