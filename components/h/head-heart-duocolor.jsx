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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w9pp6bbui {
  d: path("M7 21v-3c-3-2-4-5-4-8c0-4 3-7 7-7s7 3 7 7l3 4h-3v4h-4v3Z");
}

.wm3yt6bxx {
  stroke-opacity: 0.4;
  d: path("M10 10c0-2-4-3-4 0c0 2 4 5 4 5s4-3 4-5c0-3-4-2-4 0");
}
</style><g class="nrj6p8qat"><path class="wm3yt6bxx"/><path class="w9pp6bbui"/></g>`,
		"fallback": "coolicons:head-heart-duocolor",
	});
}

export default Component;
