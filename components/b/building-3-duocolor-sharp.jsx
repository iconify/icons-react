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
		"content": `<style>.h-x39pbqw {
  d: path("M3 20h18M5 20v-6l5-5l5 5v6");
}

.h5i3gtcmr {
  stroke-opacity: 0.4;
  d: path("M7 12V4h12v16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="h5i3gtcmr"/><path class="h-x39pbqw"/></g>`,
		"fallback": "coolicons:building-3-duocolor-sharp",
	});
}

export default Component;
