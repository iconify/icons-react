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
		"content": `<style>.d1dhfbpfl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0Z");
}

.ft5dv1b6b {
  fill: none;
}

.lwnsf1p-t {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 8a4 4 0 1 1 8 0v8a4 4 0 1 1-8 0Zm0 1H7a4 4 0 1 0 0 8h6m4-9h.01M17 13v3M6 20h3");
}
</style><g class="ft5dv1b6b"><path class="d1dhfbpfl"/><path class="lwnsf1p-t"/></g>`,
		"fallback": "coolicons:desktop-tower-duotone-round",
	});
}

export default Component;
