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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.h67i96k3t {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 6L21 6C21.5523 6 22 6.4477 22 7L22 17C22 17.5523 21.5523 18 21 18L3 18C2.4477 18 2 17.5523 2 17L2 7C2 6.4477 2.4477 6 3 6Z");
  stroke: none;
}

.pzkmj5byd {
  d: path("M2 3L22 3M2 21L22 21");
}
</style><g class="gp_8x1bzb"><path class="h67i96k3t"/><path class="pzkmj5byd"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-sharp-duotone",
	});
}

export default Component;
