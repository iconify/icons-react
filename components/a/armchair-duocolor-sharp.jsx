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
		"content": `<style>.dd3c4cc7r {
  stroke-opacity: 0.4;
  d: path("M6 9V4h12v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r1g6yn7hp {
  d: path("M4 11v7h16v-7a2 2 0 1 0-4 0v2H8v-2a2 2 0 1 0-4 0m2 7v2m12-2v2");
}
</style><g class="nrj6p8qat"><path class="dd3c4cc7r"/><path class="r1g6yn7hp"/></g>`,
		"fallback": "coolicons:armchair-duocolor-sharp",
	});
}

export default Component;
