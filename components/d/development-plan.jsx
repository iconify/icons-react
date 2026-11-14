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
		"content": `<style>.n9n-ryrie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21h19m-17 0v-3.5m0 0c0-1.75 1.25-2.75 2.75-2.75C7.25 16.5 6 17.5 4.5 17.5m7 3.5v-8m0 0c0-2 1.5-3.5 3.5-3.5c0 2-1.5 3.5-3.5 3.5m7.5 8V7m0 0c0-2 1-3.5 2.5-4c0 2-.75 3.5-2.5 4m0 4c0-1.75-1.25-3.25-3-3.5c0 2 1.25 3.25 3 3.5");
}
</style><path class="n9n-ryrie"/>`,
		"fallback": "uix:development-plan",
	});
}

export default Component;
