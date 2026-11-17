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
		"content": `<style>.a1mbuxbpb {
  stroke-opacity: 0.4;
  d: path("M17 21c-1.5-1-3-3-3-5a3 3 0 0 1 6 0c0 2-1.5 4-3 5m0-5h.01");
}

.ggg8arb0z {
  d: path("M8 21H6a2 2 0 0 1-2-2v-8.092a2 2 0 0 1 .683-1.506l6-5.25a2 2 0 0 1 2.634 0L17.714 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="a1mbuxbpb"/><path class="ggg8arb0z"/></g>`,
		"fallback": "coolicons:house-map-pin-corner-duocolor",
	});
}

export default Component;
