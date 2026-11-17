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

.ojdzbfb8i {
  d: path("M3 11h12v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z");
}

.rqyts8bos {
  stroke-opacity: 0.4;
  d: path("m15 11l6-3");
}
</style><g class="nrj6p8qat"><path class="rqyts8bos"/><path class="ojdzbfb8i"/></g>`,
		"fallback": "coolicons:frying-pan-duocolor-round",
	});
}

export default Component;
