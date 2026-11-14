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
		"content": `<style>.sh9seibwv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 4.5h2V9L7 16H2.5l1.25-7Zm7.25 0h2V9l1.25 7h-4.5L11 9Zm7.25 0h2V9l1.25 7H17l1.25-7ZM2.5 19.5h19");
}
</style><path class="sh9seibwv"/>`,
		"fallback": "uix-sharp:experiment-queue",
	});
}

export default Component;
