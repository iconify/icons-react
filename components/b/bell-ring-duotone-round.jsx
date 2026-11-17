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

.q037x2b_q {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19H7a2 2 0 0 1-2-2c0-1 1-1 1-2v-4a6 6 0 1 1 12 0v4c0 1 1 1 1 2a2 2 0 0 1-2 2zm-2 0a2 2 0 1 0 4 0m3-16a9.4 9.4 0 0 1 3 3M4 6a9.4 9.4 0 0 1 3-3");
}

.vjs-f-bje {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 19h-3a2 2 0 1 1-4 0H7a2 2 0 0 1-2-2c0-1 1-1 1-2v-4a6 6 0 1 1 12 0v4c0 1 1 1 1 2a2 2 0 0 1-2 2");
}
</style><g class="ft5dv1b6b"><path class="vjs-f-bje"/><path class="q037x2b_q"/></g>`,
		"fallback": "coolicons:bell-ring-duotone-round",
	});
}

export default Component;
