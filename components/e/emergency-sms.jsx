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
		"content": `<style>.usnsa53ab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 14.25a8.5 7.5 0 1 1 3 2.75L3.5 20ZM12 6.5v4m0 3.25h.01");
}
</style><path class="usnsa53ab"/>`,
		"fallback": "uix:emergency-sms",
	});
}

export default Component;
