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
		"content": `<style>.lqgqm1b0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 3v11.25m5-11.25v11.25M3 7.25h11.25M3 12.25h11.25M15 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m4.25 1.75L21 21");
}
</style><path class="lqgqm1b0h"/>`,
		"fallback": "uix:hashtag-search",
	});
}

export default Component;
