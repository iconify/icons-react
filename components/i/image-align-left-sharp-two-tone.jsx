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

.vrhtabbmu {
  d: path("M3 7L13 7L13 17L3 17ZM2 3L22 3M2 21L22 21");
}

.y3fcv3bfg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 6L13 6C13.5523 6 14 6.4477 14 7L14 17C14 17.5523 13.5523 18 13 18L3 18C2.4477 18 2 17.5523 2 17L2 7C2 6.4477 2.4477 6 3 6Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="y3fcv3bfg"/><path class="vrhtabbmu"/></g>`,
		"fallback": "keyline-icons:image-align-left-sharp-two-tone",
	});
}

export default Component;
