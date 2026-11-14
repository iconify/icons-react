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
		"content": `<style>.p9v1rhj-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 8h15.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H4.25A1.75 1.75 0 0 1 2.5 9.75A1.75 1.75 0 0 1 4.25 8m-.5 0c0-2.25 4.5-2.25 4.5 0M5 11.5l5 6.5m0-6.5L5 18m9-6.5l5 6.5m0-6.5L14 18");
}
</style><path class="p9v1rhj-d"/>`,
		"fallback": "uix:camp-cot",
	});
}

export default Component;
