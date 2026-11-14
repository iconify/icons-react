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
		"content": `<style>.ldoa2lblb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.75V6.5a2.25 2.25 0 0 1 4.5 0v2.25m-4.5 4.5l1.25 5.5a1 1 0 0 0 2 0L7 13.25m2.75-4.5V6.5a2.25 2.25 0 0 1 4.5 0v2.25m-4.5 4.5l1.25 5.5a1 1 0 0 0 2 0l1.25-5.5M17 8.75V6.5a2.25 2.25 0 0 1 4.5 0v2.25m-4.5 4.5l1.25 5.5a1 1 0 0 0 2 0l1.25-5.5M4.75 8.75h14.5A2.25 2.25 0 0 1 21.5 11a2.25 2.25 0 0 1-2.25 2.25H4.75A2.25 2.25 0 0 1 2.5 11a2.25 2.25 0 0 1 2.25-2.25");
}
</style><path class="ldoa2lblb"/>`,
		"fallback": "uix:dental-splint",
	});
}

export default Component;
