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
		"content": `<style>.egfmaeufb {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a1 1 0 0 0-1 1a1 1 0 0 1-2 0Z");
}

.ft5dv1b6b {
  fill: none;
}

.o20x2lb8x {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 17h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14m2-2a2 2 0 1 0 0 4m0 0h8a2 2 0 0 0 2-2v-2");
}
</style><g class="ft5dv1b6b"><path class="egfmaeufb"/><path class="o20x2lb8x"/></g>`,
		"fallback": "coolicons:book-duotone",
	});
}

export default Component;
