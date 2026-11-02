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
		"content": `<style>.mnafb_b5y {
  stroke-opacity: 0.4;
  d: path("M5 21h14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vlk64sp0r {
  d: path("m12 4l4 6l5-4l-1.701 9.358A2 2 0 0 1 17.33 17H6.669a2 2 0 0 1-1.968-1.642L3 6l5 4z");
}
</style><g class="nrj6p8qat"><path class="mnafb_b5y"/><path class="vlk64sp0r"/></g>`,
		"fallback": "coolicons:crown-duocolor",
	});
}

export default Component;
