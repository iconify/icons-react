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

.mxofbebzn {
  fill: currentColor;
  d: path("M11 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L11 22C10.4477 22 10 21.5523 10 21L10 3C10 2.4477 10.4477 2 11 2Z");
  stroke: none;
}

.zp1jvb-hk {
  d: path("M7 4L7 20M3 6L3 18");
}
</style><g class="gp_8x1bzb"><path class="mxofbebzn"/><path class="zp1jvb-hk"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-end-sharp-fill",
	});
}

export default Component;
