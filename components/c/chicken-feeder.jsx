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
		"content": `<style>.xv2rmacei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 13.5V7H6.5L12 3l5.5 4H16v6.5Zm-5 3h18L19.5 21h-15Zm6.5-3v3m5-3v3");
}
</style><path class="xv2rmacei"/>`,
		"fallback": "uix:chicken-feeder",
	});
}

export default Component;
