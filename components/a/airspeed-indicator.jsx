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
		"content": `<style>.vv05h_dxa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M6 15.5l-2.25 1.25M6 8.5L3.75 7.25M12 5V2.5m6 6l2.25-1.25M18 15.5l2.25 1.25M12 12l2.75-4.75M12 12h.01");
}
</style><path class="vv05h_dxa"/>`,
		"fallback": "uix:airspeed-indicator",
	});
}

export default Component;
