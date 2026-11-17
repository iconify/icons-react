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
		"content": `<style>.dye9yubgn {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21a4 4 0 0 1-4-4v-5.185a4 4 0 0 1 1.366-3.01l4-3.5a4 4 0 0 1 5.268 0L17.714 8M15 16a2 2 0 1 1 2 2m0 3h.01");
}

.ft5dv1b6b {
  fill: none;
}

.xih8zubbn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17.714 8H12a4 4 0 0 0-4 4v9a4 4 0 0 1-4-4v-5.185a4 4 0 0 1 1.366-3.01l4-3.5a4 4 0 0 1 5.268 0Z");
}
</style><g class="ft5dv1b6b"><path class="xih8zubbn"/><path class="dye9yubgn"/></g>`,
		"fallback": "coolicons:house-help-corner-duotone-round",
	});
}

export default Component;
