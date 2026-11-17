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
		"content": `<style>.dc67lnn5a {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 8h4l2 4h3v-2h3v8h-3v-2h-4v4h-4l-2-4H6v-5Z");
}

.ft5dv1b6b {
  fill: none;
}

.w_mo9dbkr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 8h4l2 4h3v-2h3v8h-3v-2h-4v4h-4l-2-4H6v-5zm0-4h4m-2 0v4m-8 3v4m0-2h3");
}
</style><g class="ft5dv1b6b"><path class="dc67lnn5a"/><path class="w_mo9dbkr"/></g>`,
		"fallback": "coolicons:engine-duotone-sharp",
	});
}

export default Component;
