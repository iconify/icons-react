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
		"content": `<style>.io902_9ee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4v11m5-11v11M3.5 7.5h10m-10 4h10m1.25 6.5l2 2L21 15.75");
}
</style><path class="io902_9ee"/>`,
		"fallback": "uix:hash-check",
	});
}

export default Component;
