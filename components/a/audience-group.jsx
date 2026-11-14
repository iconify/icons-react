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
		"content": `<style>.q1e41zb1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM5.5 20c0-4 3-6.5 6.5-6.5s6.5 2.5 6.5 6.5M2.5 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm15 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-15 8.5c0-2.25.75-3.75 2.25-3.75M21.5 17.5c0-2.25-.75-3.75-2.25-3.75");
}
</style><path class="q1e41zb1q"/>`,
		"fallback": "uix-sharp:audience-group",
	});
}

export default Component;
