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
		"content": `<style>.dnzfmabjt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11h9l1 2v6a2.5 2.5 0 0 1-2.5 2.5H9A2.5 2.5 0 0 1 6.5 19v-6Zm4.5 0V6c-1.5-1-1.5-2.5 0-3.5c1.5 1 1.5 2.5 0 3.5m-3 5L6.5 4.5M15 11l2.5-6.5");
}
</style><path class="dnzfmabjt"/>`,
		"fallback": "uix:brush-jar",
	});
}

export default Component;
