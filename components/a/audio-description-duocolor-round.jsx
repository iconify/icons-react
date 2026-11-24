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

.ub6uqvl0c {
  d: path("M3 16v-5a3 3 0 0 1 6 0v5m-6-3h6m4-5v8m0-8h1a4 4 0 1 1 0 8h-1");
}

.y6po_5q8o {
  stroke-opacity: 0.4;
  d: path("M19 6a10 10 0 0 1 0 12");
}
</style><g class="nrj6p8qat"><path class="y6po_5q8o"/><path class="ub6uqvl0c"/></g>`,
		"fallback": "coolicons:audio-description-duocolor-round",
	});
}

export default Component;
