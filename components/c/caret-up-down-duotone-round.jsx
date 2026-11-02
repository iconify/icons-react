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

.tzi-wfb5k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m8 10l4-4l4 4Zm0 4h8l-4 4Z");
}

.w5l9wy64o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 6l4 4H8Zm0 12l-4-4h8Z");
}
</style><g class="ft5dv1b6b"><path class="w5l9wy64o"/><path class="tzi-wfb5k"/></g>`,
		"fallback": "coolicons:caret-up-down-duotone-round",
	});
}

export default Component;
