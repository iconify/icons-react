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

.q3iwx9tbj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 12v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-7a4 4 0 0 1 8 0");
}

.xedu4e8yv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 12a4 4 0 1 1 8 0v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm4-4V5l6-2M9 15h8M13 5H9a4 4 0 0 0-4 4v7");
}
</style><g class="ft5dv1b6b"><path class="q3iwx9tbj"/><path class="xedu4e8yv"/></g>`,
		"fallback": "coolicons:fire-extinguisher-duotone",
	});
}

export default Component;
