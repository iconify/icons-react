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
		"content": `<style>.lluor0vph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 8l3-2.5m3-.5L14 7m.75 3L10 14m-2.5 0L5 10M2.5 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6-5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M14 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-7 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m7.75 2.5l2 2L21 15.75");
}
</style><path class="lluor0vph"/>`,
		"fallback": "uix:constellation-check",
	});
}

export default Component;
