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
		"content": `<style>.c2jrfeb4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-5 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m10 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M2 19a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2-12l-2 3m5-3l2 3m-9.75 4.25l-1.5 2.5m4-2.5l1.5 2.5");
}
</style><path class="c2jrfeb4o"/>`,
		"fallback": "uix:heap-data",
	});
}

export default Component;
