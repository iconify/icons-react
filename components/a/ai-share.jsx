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
		"content": `<style>.k4w993bec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m11 6.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m2.75-16c.1 2 1.2 2.9 3 3c-1.8.1-2.9 1-3 3c-.1-2-1.2-2.9-3-3c1.8-.1 2.9-1 3-3m-8.5 8l5.75-3.25M9 13.5l6 3.5");
}
</style><path class="k4w993bec"/>`,
		"fallback": "uix:ai-share",
	});
}

export default Component;
