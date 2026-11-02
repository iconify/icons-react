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
		"content": `<style>.e3iu7mb7z {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m14 13l-5 5l-5 2l2-5l5-5M9 8l7 7m-2-2l1 1l4-4a3.536 3.536 0 0 0-5-5l-4 4l1 1");
}

.ft5dv1b6b {
  fill: none;
}

.v9cmowbpe {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m11.707 9.293l3 3a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-.336.221l-5 2a.998.998 0 0 1-1.299-1.299l2-5a1 1 0 0 1 .221-.336l5-5a1 1 0 0 1 1.414 0");
}
</style><g class="ft5dv1b6b"><path class="v9cmowbpe"/><path class="e3iu7mb7z"/></g>`,
		"fallback": "coolicons:eyedropper-duotone-sharp",
	});
}

export default Component;
