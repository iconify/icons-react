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
		"content": `<style>.cc__5t--e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9.5h5.5A2.5 2.5 0 0 1 13 12a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 12A2.5 2.5 0 0 1 5 9.5m8.668-.445L14.5 8.5a.965.965 0 0 1 1.5.803v5.394a.965.965 0 0 1-1.5.803l-.832-.555A1.5 1.5 0 0 1 13 13.697v-3.394a1.5 1.5 0 0 1 .668-1.248M18.5 7L21 5.5M18.5 12h3m-3 5l2.5 1.5");
}
</style><path class="cc__5t--e"/>`,
		"fallback": "uix:dive-torch",
	});
}

export default Component;
