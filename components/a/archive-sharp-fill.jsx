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
		"content": `<style>.c7poxkbvh {
  fill: currentColor;
  d: path("M3 4L21 4C21.5523 4 22 4.4477 22 5L22 8C22 8.5523 21.5523 9 21 9L3 9C2.4477 9 2 8.5523 2 8L2 5C2 4.4477 2.4477 4 3 4Z");
  stroke: none;
}

.ffsthac_t {
  d: path("M2 4L22 4L22 9L2 9L2 4ZM4 9L4 20L20 20L20 9M9 13L15 13");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="gp_8x1bzb"><path class="c7poxkbvh"/><path class="ffsthac_t"/></g>`,
		"fallback": "keyline-icons:archive-sharp-fill",
	});
}

export default Component;
