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
		"content": `<style>.fyzhyacrs {
  d: path("M7 19A5 5 0 0 1 7 9c2-7 11-6 11 2a4 4 0 1 1 0 8Z");
}

.lkd3r2g0j {
  stroke-opacity: 0.4;
  d: path("M9 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m4 2l2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lkd3r2g0j"/><path class="fyzhyacrs"/></g>`,
		"fallback": "coolicons:cloud-search-duocolor-round",
	});
}

export default Component;
