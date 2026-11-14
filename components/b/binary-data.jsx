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
		"content": `<style>.aqrqyjz8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4v16M4.5 6.5L7 4m3.5 8a4.5 8 0 1 0 9 0a4.5 8 0 1 0-9 0");
}
</style><path class="aqrqyjz8e"/>`,
		"fallback": "uix:binary-data",
	});
}

export default Component;
