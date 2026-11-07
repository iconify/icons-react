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
		"content": `<style>.j_miuzr0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 16a8.944 8.944 0 1 1 4 4l-5 1Zm8-5c-1-2-4-2-4 0s4 4 4 4s4-2 4-4s-3-2-4 0");
}
</style><path class="j_miuzr0h"/>`,
		"fallback": "coolicons:chat-circle-heart-round",
	});
}

export default Component;
