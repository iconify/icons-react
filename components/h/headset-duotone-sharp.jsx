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
		"content": `<style>.e0wtwe-in {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 10a7 7 0 0 1 14 0M3 10h5v7H3Zm13 0h5v7h-5Zm5 5v6h-8");
}

.ft5dv1b6b {
  fill: none;
}

.ys3ouibrl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 10h5v7H3Zm13 0h5v7h-5Z");
}
</style><g class="ft5dv1b6b"><path class="ys3ouibrl"/><path class="e0wtwe-in"/></g>`,
		"fallback": "coolicons:headset-duotone-sharp",
	});
}

export default Component;
