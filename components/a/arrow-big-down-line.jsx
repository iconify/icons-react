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
		"content": `<style>.vpejcybhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15 3.5H9m1.453 15.953l-4.039-4.039A.828.828 0 0 1 7 14a2 2 0 0 0 2-2v-1.812A2.19 2.19 0 0 1 11.188 8h1.625A2.19 2.19 0 0 1 15 10.188V12a2 2 0 0 0 2 2a.828.828 0 0 1 .586 1.414l-4.039 4.039a2.19 2.19 0 0 1-3.094 0");
}
</style><path class="vpejcybhg"/>`,
		"fallback": "uix:arrow-big-down-line",
	});
}

export default Component;
