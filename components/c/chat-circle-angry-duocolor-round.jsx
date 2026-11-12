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
		"content": `<style>.djxxm2q5p {
  stroke-opacity: 0.4;
  d: path("m8 9l2 1m6-1l-2 1m-6 5a5.657 5.657 0 0 1 8 0");
}

.n5iafhovj {
  d: path("M4 16a8.944 8.944 0 1 1 4 4l-5 1Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="djxxm2q5p"/><path class="n5iafhovj"/></g>`,
		"fallback": "coolicons:chat-circle-angry-duocolor-round",
	});
}

export default Component;
