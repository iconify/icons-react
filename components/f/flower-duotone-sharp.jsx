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

.xnmznwc6q {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 6a3 3 0 1 1 0 6a3 3 0 1 1-6 0a3 3 0 1 1 0-6a3 3 0 1 1 6 0");
}

.zb4ayzb_o {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 6a3 3 0 0 1 6 0a3 3 0 0 1 0 6a3 3 0 0 1-6 0a3 3 0 0 1 0-6m3 9v6m0-12h.01");
}
</style><g class="ft5dv1b6b"><path class="xnmznwc6q"/><path class="zb4ayzb_o"/></g>`,
		"fallback": "coolicons:flower-duotone-sharp",
	});
}

export default Component;
