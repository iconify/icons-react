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

.q_a5zcbnk {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0");
}

.tf8w4-bph {
  stroke-opacity: 0.4;
  d: path("m8 8l2 2m0-2l-2 2m6-2l2 2m0-2l-2 2m-6 4a5.657 5.657 0 0 0 8 0");
}
</style><g class="nrj6p8qat"><path class="tf8w4-bph"/><path class="q_a5zcbnk"/></g>`,
		"fallback": "coolicons:face-dizzy-duocolor-round",
	});
}

export default Component;
