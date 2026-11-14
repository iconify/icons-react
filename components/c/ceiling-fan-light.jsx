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
		"content": `<style>.nn3ns5pdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 4.5h5m-2.5 0v6m-1 0h2a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9.5 12a1.5 1.5 0 0 1 1.5-1.5M2.5 12h7m5 0h7M12 13.5V16m-4 0h8a4 4 0 0 1-8 0");
}
</style><path class="nn3ns5pdz"/>`,
		"fallback": "uix:ceiling-fan-light",
	});
}

export default Component;
