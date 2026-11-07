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

.u0-anibjx {
  stroke-opacity: 0.4;
  d: path("M8 10h2v2l-2 2m6-4h2v2l-2 2");
}
</style><g class="nrj6p8qat"><path class="u0-anibjx"/><path class="n5iafhovj"/></g>`,
		"fallback": "coolicons:chat-circle-quote-duocolor-round",
	});
}

export default Component;
