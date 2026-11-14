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
		"content": `<style>.klz59xbpz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 4l3.5 4H18c2 0 3 1 3 2s-1 1.5-2.5 1.5H7Zm7 1h7m-3.5 0v3M3 15q1.5-1.5 3 0t3 0t3 0t3 0t3 0t3 0M3 19.25q1.5-1.5 3 0t3 0t3 0t3 0t3 0t3 0");
}
</style><path class="klz59xbpz"/>`,
		"fallback": "uix:flying-boat",
	});
}

export default Component;
