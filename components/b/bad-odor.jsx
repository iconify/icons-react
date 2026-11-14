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
		"content": `<style>.ozngk9bwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 14a4 4 0 0 1 0-8a4.75 4.75 0 0 1 9 .5A3.75 3.75 0 0 1 17 14ZM8 16.75C6.75 18 9.25 19.5 8 21.5m4-4.75c-1.25 1.25 1.25 2.75 0 4.75m4-4.75c-1.25 1.25 1.25 2.75 0 4.75");
}
</style><path class="ozngk9bwh"/>`,
		"fallback": "uix:bad-odor",
	});
}

export default Component;
