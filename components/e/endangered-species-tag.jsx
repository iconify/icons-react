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
		"content": `<style>.zjbr8oyee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.056 12.889q.525-.624.944-1.389C18 6 10.5 6 7.5 11.5L3 7.5v8l4.5-4c1.676 3.073 4.757 4.429 7.673 4.068M16.5 10.5h.01M18 14.75v3.5M18 21h.01");
}
</style><path class="zjbr8oyee"/>`,
		"fallback": "uix:endangered-species-tag",
	});
}

export default Component;
