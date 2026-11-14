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
		"content": `<style>.i71c4ub8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 11.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M3 21c0-2.5 1.75-3.75 4-3.75s4 1.25 4 3.75m3.25-9.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M13 21c0-2.5 1.75-3.75 4-3.75s4 1.25 4 3.75M12 9L8.75 5.75A2.1 2.1 0 1 1 12 3a2.1 2.1 0 1 1 3.25 2.75Z");
}
</style><path class="i71c4ub8w"/>`,
		"fallback": "uix:couple-heart",
	});
}

export default Component;
