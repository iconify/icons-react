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
		"content": `<style>.bb8lknbsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 15.5h4.5v-8h-8L13 4h8v8l-3.5 3.5m0-8L21 4M4.25 12.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-1.75 9C2.5 19 4.5 18 7 18s4.5 1 4.5 3.5");
}
</style><path class="bb8lknbsc"/>`,
		"fallback": "uix:ar-occlusion",
	});
}

export default Component;
