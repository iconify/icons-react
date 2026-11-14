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
		"content": `<style>.iey00ibxu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 9.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M6.5 21c0-3.25 2.5-5.5 5.5-5.5s5.5 2.25 5.5 5.5M2.75 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m14 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M2.5 15.5V14a2.75 2.75 0 0 1 2.75-2.75H6.5m15 4.25V14a2.75 2.75 0 0 0-2.75-2.75H17.5");
}
</style><path class="iey00ibxu"/>`,
		"fallback": "uix:crowd-density",
	});
}

export default Component;
