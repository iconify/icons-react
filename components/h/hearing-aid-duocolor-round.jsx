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
		"content": `<style>.nl1wbccos {
  stroke-opacity: 0.4;
  d: path("M10 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2 2v1l-2 1");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wmfx_w30t {
  d: path("M4 11a8 8 0 1 1 16 0c0 5-8 3-8 7a3 3 0 0 1-6 0");
}
</style><g class="nrj6p8qat"><path class="nl1wbccos"/><path class="wmfx_w30t"/></g>`,
		"fallback": "coolicons:hearing-aid-duocolor-round",
	});
}

export default Component;
