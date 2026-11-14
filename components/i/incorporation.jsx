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
		"content": `<style>.dm92wyf9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.8 20.5H3V9h4.5V2.5h9v10.1m-6-6.1h.01m2.99 0h.01m-3.01 4h.01m2.99 0h.01M18 15v6m-3-3h6");
}
</style><path class="dm92wyf9b"/>`,
		"fallback": "uix:incorporation",
	});
}

export default Component;
