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
		"content": `<style>.k2pwv2b1h {
  stroke-opacity: 0.4;
  d: path("M12 11c-1-2-4-2-4 0s4 4 4 4s4-2 4-4s-3-2-4 0");
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
</style><g class="nrj6p8qat"><path class="k2pwv2b1h"/><path class="n5iafhovj"/></g>`,
		"fallback": "coolicons:chat-circle-heart-duocolor-round",
	});
}

export default Component;
