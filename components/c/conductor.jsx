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
		"content": `<style>.ad5m0k6oj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.879 17.146l1.767-1.767a1.75 1.75 0 0 1 2.475 0a1.75 1.75 0 0 1 0 2.475l-1.767 1.767a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475M8 15.5l12-12m-5.25 15.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0v-5.5m0 0q2.75.75 2.75 3.25");
}
</style><path class="ad5m0k6oj"/>`,
		"fallback": "uix:conductor",
	});
}

export default Component;
