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
		"content": `<style>.csbx9bt0x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m6 15l5-5l3 3l-5 5l-5 2Z");
}

.e3iu7mb7z {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m14 13l-5 5l-5 2l2-5l5-5M9 8l7 7m-2-2l1 1l4-4a3.536 3.536 0 0 0-5-5l-4 4l1 1");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="csbx9bt0x"/><path class="e3iu7mb7z"/></g>`,
		"fallback": "coolicons:eyedropper-duotone-sharp",
	});
}

export default Component;
