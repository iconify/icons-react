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
		"content": `<style>.etj810igh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18a9 3.25 0 1 0 18 0a9 3.25 0 1 0-18 0m9 0V3m0 .5h7l-2 2.75L19 9h-7");
}
</style><path class="etj810igh"/>`,
		"fallback": "uix:capture-zone",
	});
}

export default Component;
