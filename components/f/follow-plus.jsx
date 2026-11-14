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
		"content": `<style>.fjtgpibyf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m-3 14c0-4 3.25-6.5 7.5-6.5c1.157 0 2.24.185 3.204.536M18 15v6m-3-3h6");
}
</style><path class="fjtgpibyf"/>`,
		"fallback": "uix:follow-plus",
	});
}

export default Component;
