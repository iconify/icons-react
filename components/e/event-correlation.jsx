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
		"content": `<style>.m7nphcbed {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 13a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m.75-8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-7 14a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m14 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M12 9.75V7m-2.5 8L7 17m7.5-2l2.5 2");
}
</style><path class="m7nphcbed"/>`,
		"fallback": "uix:event-correlation",
	});
}

export default Component;
