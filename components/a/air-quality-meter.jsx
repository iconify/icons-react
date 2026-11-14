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
		"content": `<style>.jb02y1bvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5a8.5 8.5 0 0 1 17 0m-17 0h17m-8.5 0l4.5-5m-4.5 5h.01m3.74 9a2.25 2.25 0 0 1 0-4.5a2.75 2.75 0 0 1 5 .5a2 2 0 0 1-.5 4Z");
}
</style><path class="jb02y1bvo"/>`,
		"fallback": "uix:air-quality-meter",
	});
}

export default Component;
