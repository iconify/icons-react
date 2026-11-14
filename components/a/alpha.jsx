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
		"content": `<style>.jq085l6gm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.5 6c-1.5 5-4 12-8.75 12c-3 0-5-2.6-5-6s2-6 5-6C14.5 6 17 13 18.5 18");
}
</style><path class="jq085l6gm"/>`,
		"fallback": "uix:alpha",
	});
}

export default Component;
