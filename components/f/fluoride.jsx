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
		"content": `<style>.zqndl6z2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.676 16.754l.574-3.254c.5-2 1.75-4 1.75-6.5c0-2.75-1.25-4.5-3.5-4.5c-1.25 0-1.75.75-2.75.75S7.25 2.5 6 2.5C3.75 2.5 2.5 4.25 2.5 7c0 2.5 1.25 4.5 1.75 6.5L5 17.75c.25 1.5 2 1.5 2.25 0L8 14.5c.25-1 1.25-1 1.5 0l.75 3.25c.204 1.222 1.404 1.449 1.976.679m6.024-4.679c1.5 1.5 3.25 3.25 3.25 5a3.25 3.25 0 0 1-6.5 0c0-1.75 1.75-3.5 3.25-5");
}
</style><path class="zqndl6z2b"/>`,
		"fallback": "uix:fluoride",
	});
}

export default Component;
