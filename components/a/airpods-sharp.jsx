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
		"content": `<style>.d9n7g7e8t {
  d: path("M2 3L22 3L22 21L2 21L2 3ZM2 9L22 9M8 8L16 8L16 10L8 10L8 8Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rj2y4vkzd {
  fill: currentColor;
  d: path("M13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="d9n7g7e8t"/><path class="rj2y4vkzd"/></g>`,
		"fallback": "keyline-icons:airpods-sharp",
	});
}

export default Component;
