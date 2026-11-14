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
		"content": `<style>.odpr7vr_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 14.5L7 7h10l-1.5 7.5M7 7C4.5 7 2.5 5.5 2.5 3M17 7c2.5 0 4.5-1.5 4.5-4m-14 11.5h9a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-4.5a1 1 0 0 1 1-1Zm2.5 3.25h.01m3.99 0h.01");
}
</style><path class="odpr7vr_j"/>`,
		"fallback": "uix-sharp:bull",
	});
}

export default Component;
