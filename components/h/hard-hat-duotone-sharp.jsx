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
		"content": `<style>.b9b40_beb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 16v-5a5 5 0 0 1 5-5m4 0a5 5 0 0 1 5 5v5M3 16h18v4H3Zm7-5V4h4v7");
}

.ft5dv1b6b {
  fill: none;
}

.r0rjfwbjn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 16v-5a5 5 0 0 1 5-5V4h4v2a5 5 0 0 1 5 5v5h2v4H3v-4Z");
}
</style><g class="ft5dv1b6b"><path class="r0rjfwbjn"/><path class="b9b40_beb"/></g>`,
		"fallback": "coolicons:hard-hat-duotone-sharp",
	});
}

export default Component;
