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
		"content": `<style>.n5iafhovj {
  d: path("M4 16a8.944 8.944 0 1 1 4 4l-5 1Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u80zcxwwa {
  stroke-opacity: 0.4;
  d: path("M8 15v-1a2 2 0 0 1 2-2h6m-3-3l3 3l-3 3");
}
</style><g class="nrj6p8qat"><path class="u80zcxwwa"/><path class="n5iafhovj"/></g>`,
		"fallback": "coolicons:chat-circle-share-duocolor",
	});
}

export default Component;
