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
		"content": `<style>.ci2mv0b3w {
  stroke-opacity: 0.4;
  d: path("M5 18H3v-6l5-5h5l5 5h3v6h-2M9 18h6");
}

.mw6yc-8au {
  d: path("M5 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-4-8l-2 2h4l-2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ci2mv0b3w"/><path class="mw6yc-8au"/></g>`,
		"fallback": "coolicons:car-electric-side-duocolor-sharp",
	});
}

export default Component;
