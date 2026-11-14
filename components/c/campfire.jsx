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
		"content": `<style>.n8ics9h6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4s-4.5 5-4.5 9c0 2.5 2 4 4.5 4s4.5-1.5 4.5-4c0-4-4.5-9-4.5-9M4.5 20.5l15-3m-15 0l15 3");
}
</style><path class="n8ics9h6e"/>`,
		"fallback": "uix:campfire",
	});
}

export default Component;
