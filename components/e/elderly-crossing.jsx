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
		"content": `<style>.uaruy1bhz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m.25 4.25L4.75 14l1.75 7m-1.75-7L3 21M6.5 8.75l3 3.25v9m7.25-16.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M17 8.75L15.25 14L17 21m-1.75-7l-1.75 7M17 8.75L20 12v9");
}
</style><path class="uaruy1bhz"/>`,
		"fallback": "uix:elderly-crossing",
	});
}

export default Component;
