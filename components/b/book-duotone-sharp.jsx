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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.lzhz0743k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 17h12V3H5v16m2-2a2 2 0 1 0 0 4m0 0h10v-4");
}

.xzwfp80bu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 19V3h14v14H7a2 2 0 0 0-2 2");
}
</style><g class="ft5dv1b6b"><path class="xzwfp80bu"/><path class="lzhz0743k"/></g>`,
		"fallback": "coolicons:book-duotone-sharp",
	});
}

export default Component;
