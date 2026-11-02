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
		"content": `<style>.hek983yzr {
  stroke-opacity: 0.4;
  d: path("m14 13l1 1l4-4a3.536 3.536 0 0 0-5-5l-4 4l1 1");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ymy21s4to {
  d: path("m14 13l-5 5l-5 2l2-5l5-5M9 8l7 7");
}
</style><g class="nrj6p8qat"><path class="hek983yzr"/><path class="ymy21s4to"/></g>`,
		"fallback": "coolicons:eyedropper-duocolor-sharp",
	});
}

export default Component;
