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
		"content": `<style>.sl689ebuj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 16.5a2.75 2 0 1 0 5.5 0a2.75 2 0 1 0-5.5 0m5.5 0V4m2.5 2a3.5 3.5 0 0 1 0 5M15 4.5a7 7 0 0 1 0 8m.25 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L21 21");
}
</style><path class="sl689ebuj"/>`,
		"fallback": "uix:humming-search",
	});
}

export default Component;
