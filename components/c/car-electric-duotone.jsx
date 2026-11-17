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

.qd12-8oiw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 18a2 2 0 0 1-2-2v-6l2-4c.326-.651 1.15-1.999 2-2h8c.85.001 1.674 1.349 2 2l2 4v6a2 2 0 0 1-2 2Z");
}

.wg8_nsi0y {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m13 8l-3 3h4l-3 3m1 4H6a2 2 0 0 1-2-2v-6l2-4c.613-1.226 1.387-2 2-2h8c.613 0 1.387.774 2 2l2 4v6a2 2 0 0 1-2 2zm-6 0h2v2H6Zm10 0h2v2h-2ZM3 10h1m16 0h1");
}
</style><g class="ft5dv1b6b"><path class="qd12-8oiw"/><path class="wg8_nsi0y"/></g>`,
		"fallback": "coolicons:car-electric-duotone",
	});
}

export default Component;
