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
		"content": `<style>.d53ospbbr {
  stroke-opacity: 0.4;
  d: path("M9 21v-3a3 3 0 0 1 6 0v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.va0-xjbzr {
  d: path("M3 11h18v10H3zm3 0V3m12 8V3M6 5h12m-8-2v2m4-2v2");
}
</style><g class="nrj6p8qat"><path class="d53ospbbr"/><path class="va0-xjbzr"/></g>`,
		"fallback": "coolicons:castle-duocolor-sharp",
	});
}

export default Component;
