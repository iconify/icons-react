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
		"content": `<style>.kygnyzwik {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 4.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-7.25 5h19m-9.875 0h.75A2.625 2.625 0 0 1 15 12.125v1.25A2.625 2.625 0 0 1 12.375 16h-.75A2.625 2.625 0 0 1 9 13.375v-1.25A2.625 2.625 0 0 1 11.625 9.5M10.5 16l-1 5.5m4-5.5l1 5.5");
}
</style><path class="kygnyzwik"/>`,
		"fallback": "uix:advantage-play",
	});
}

export default Component;
