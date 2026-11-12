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
		"content": `<style>.gxeepxprv {
  stroke-opacity: 0.4;
  d: path("M9 9h.01M14 9h2m-8 5a5.657 5.657 0 0 0 8 0");
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
</style><g class="nrj6p8qat"><path class="gxeepxprv"/><path class="n5iafhovj"/></g>`,
		"fallback": "coolicons:chat-circle-wink-duocolor-round",
	});
}

export default Component;
