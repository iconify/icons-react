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
		"content": `<style>.rwnv7f-rz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm11 6.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm2.75-16c.1 2 1.2 2.9 3 3c-1.8.1-2.9 1-3 3c-.1-2-1.2-2.9-3-3c1.8-.1 2.9-1 3-3Zm-8.5 8l5.75-3.25M9 13.5l6 3.5");
}
</style><path class="rwnv7f-rz"/>`,
		"fallback": "uix-sharp:ai-share",
	});
}

export default Component;
