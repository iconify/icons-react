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
		"content": `<style>.i8-ifabpg {
  stroke-opacity: 0.4;
  d: path("M9 9h.01M15 9h.01M8 13a4 4 0 1 0 8 0Z");
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
</style><g class="nrj6p8qat"><path class="i8-ifabpg"/><path class="n5iafhovj"/></g>`,
		"fallback": "coolicons:chat-circle-laugh-duocolor-round",
	});
}

export default Component;
