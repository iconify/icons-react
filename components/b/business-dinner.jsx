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
		"content": `<style>.nd6887bwv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 15.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M2.5 11v2.25a1.5 1.5 0 0 0 3 0V11M4 14.75V21m15.75 0V11c1.25 1 1.75 2.5 1.75 4.5h-1.75M10 2.5h5c0 2.5-1 4-2.5 4S10 5 10 2.5m2.5 4v1.75");
}
</style><path class="nd6887bwv"/>`,
		"fallback": "uix:business-dinner",
	});
}

export default Component;
