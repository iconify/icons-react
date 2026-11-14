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
		"content": `<style>.xjw96flvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5V21m-2 0h4M19 3.5V21m-2 0h4M4.346 7.437l16 3.79a1.5 1.5 0 0 1 1.154 1.459v.917a1.5 1.5 0 0 1-1.846 1.46l-16-3.79A1.5 1.5 0 0 1 2.5 9.814v-.917a1.5 1.5 0 0 1 1.846-1.46M10.75 9l-1.5 3.5m6-2.5l-1.5 3.75");
}
</style><path class="xjw96flvm"/>`,
		"fallback": "uix:crime-scene-tape",
	});
}

export default Component;
