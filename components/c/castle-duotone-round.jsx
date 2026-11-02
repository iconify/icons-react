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
		"content": `<style>.dllzbwbge {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 10V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5a3 3 0 0 1 3 3v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5v-4a3 3 0 0 1 3-3");
}

.ft5dv1b6b {
  fill: none;
}

.npuugpeam {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 11h7a2 2 0 0 1 2 2v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4a2 2 0 0 1 2-2zm-6 0V3m12 8V3M6 5h12m-8-2v2m4-2v2M9 21v-3a3 3 0 0 1 6 0v3");
}
</style><g class="ft5dv1b6b"><path class="dllzbwbge"/><path class="npuugpeam"/></g>`,
		"fallback": "coolicons:castle-duotone-round",
	});
}

export default Component;
