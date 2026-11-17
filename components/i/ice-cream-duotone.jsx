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
		"content": `<style>.e_ay51bjq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 8a5 5 0 0 1 10 0a2 2 0 1 1 0 4H7a2 2 0 1 1 0-4m0 4l5 9l5-9");
}

.ft5dv1b6b {
  fill: none;
}

.s9octjqtp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 8a5 5 0 0 1 10 0a2 2 0 1 1 0 4l-5 9l-5-9a2 2 0 1 1 0-4");
}
</style><g class="ft5dv1b6b"><path class="s9octjqtp"/><path class="e_ay51bjq"/></g>`,
		"fallback": "coolicons:ice-cream-duotone",
	});
}

export default Component;
