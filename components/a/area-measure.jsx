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
		"content": `<style>.fzh1bzbcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8.5h9a1.75 1.75 0 0 1 1.75 1.75v9A1.75 1.75 0 0 1 13.75 21h-9A1.75 1.75 0 0 1 3 19.25v-9A1.75 1.75 0 0 1 4.75 8.5M3 4h12.5M4.75 2.25L3 4l1.75 1.75m9-3.5L15.5 4l-1.75 1.75M20 8.5V21m-1.75-10.75L20 8.5l1.75 1.75m-3.5 9L20 21l1.75-1.75");
}
</style><path class="fzh1bzbcv"/>`,
		"fallback": "uix:area-measure",
	});
}

export default Component;
