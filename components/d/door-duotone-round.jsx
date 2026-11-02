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
		"content": `<style>.dc11fdhul {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 22a1 1 0 0 1-1-1V7a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v14a1 1 0 0 1-1 1Z");
}

.ft5dv1b6b {
  fill: none;
}

.qxyl_3bju {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M6 21V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v14m-4-9h.01");
}
</style><g class="ft5dv1b6b"><path class="dc11fdhul"/><path class="qxyl_3bju"/></g>`,
		"fallback": "coolicons:door-duotone-round",
	});
}

export default Component;
