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
		"content": `<style>.ol65tdb3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M9.5 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M17 9.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M2.5 21c0-5 4.5-7.5 9.5-7.5s9.5 2.5 9.5 7.5");
}
</style><path class="ol65tdb3j"/>`,
		"fallback": "uix:huddle",
	});
}

export default Component;
