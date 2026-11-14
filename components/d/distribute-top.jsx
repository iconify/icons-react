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
		"content": `<style>.umtln93pe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19M4.75 5.75zA2.25 2.25 0 0 1 7 8v11a2.25 2.25 0 0 1-2.25 2.25A2.25 2.25 0 0 1 2.5 19V8a2.25 2.25 0 0 1 2.25-2.25m7.25 0zA2.25 2.25 0 0 1 14.25 8v3.5A2.25 2.25 0 0 1 12 13.75a2.25 2.25 0 0 1-2.25-2.25V8A2.25 2.25 0 0 1 12 5.75m7.25 0zA2.25 2.25 0 0 1 21.5 8v7.5a2.25 2.25 0 0 1-2.25 2.25A2.25 2.25 0 0 1 17 15.5V8a2.25 2.25 0 0 1 2.25-2.25");
}
</style><path class="umtln93pe"/>`,
		"fallback": "uix:distribute-top",
	});
}

export default Component;
