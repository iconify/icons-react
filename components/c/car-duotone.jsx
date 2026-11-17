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

.jng2y1b4r {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 18H6a2 2 0 0 1-2-2v-6l2-4c.613-1.226 1.387-2 2-2h8c.613 0 1.387.774 2 2l2 4v6a2 2 0 0 1-2 2zm-6 0h2v2H6Zm10 0h2v2h-2ZM3 10h18M8 14h.01M16 14h.01");
}

.qd12-8oiw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 18a2 2 0 0 1-2-2v-6l2-4c.326-.651 1.15-1.999 2-2h8c.85.001 1.674 1.349 2 2l2 4v6a2 2 0 0 1-2 2Z");
}
</style><g class="ft5dv1b6b"><path class="qd12-8oiw"/><path class="jng2y1b4r"/></g>`,
		"fallback": "coolicons:car-duotone",
	});
}

export default Component;
