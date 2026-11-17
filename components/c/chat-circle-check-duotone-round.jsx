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
		"content": `<style>.b_5suczoi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 16A8.944 8.944 0 0 1 18.325 5.675A8.944 8.944 0 0 1 8 20l-5 1Z");
}

.ft5dv1b6b {
  fill: none;
}

.y9c685b1c {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 16a8.944 8.944 0 1 1 4 4l-5 1Zm4-4l3 3l5-6");
}
</style><g class="ft5dv1b6b"><path class="b_5suczoi"/><path class="y9c685b1c"/></g>`,
		"fallback": "coolicons:chat-circle-check-duotone-round",
	});
}

export default Component;
