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
		"content": `<style>.i6_hunj_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 19c7 0 7-14 14-14M2 19a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM19 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="i6_hunj_p"/>`,
		"fallback": "uix-sharp:easing-curve",
	});
}

export default Component;
