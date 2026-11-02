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

.vxjq_5bhz {
  stroke-opacity: 0.4;
  d: path("M7 12v-1a2 2 0 0 1 2-2h1m7 3v1a2 2 0 0 1-2 2h-1");
}

.yd5yxj9_b {
  d: path("M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z");
}
</style><g class="nrj6p8qat"><path class="vxjq_5bhz"/><path class="yd5yxj9_b"/></g>`,
		"fallback": "coolicons:aspect-ratio-duocolor-round",
	});
}

export default Component;
