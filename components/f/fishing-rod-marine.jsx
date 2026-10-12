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
		"content": `<style>.p8thn7bry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.46 19.8l1.08.9q.38.32.7-.06l2.57-3.07q.32-.38-.06-.7l-1.08-.9q-.38-.32-.7.06L3.4 19.1q-.32.38.06.7m3.75-3.38L18 3.5m0 0c1.75 2.5 2.5 6 2.5 10.5v2.25a1.75 1.75 0 0 1-3.5 0v-.75");
}
</style><path class="p8thn7bry"/>`,
		"fallback": "iconoven:fishing-rod-marine",
	});
}

export default Component;
