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

.v9q4vdwqk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 15H9.667a3 3 0 0 1-3-3V9.028A3 3 0 0 1 7.69 6.77l2.333-2.041a3 3 0 0 1 3.952 0l2.333 2.041a3 3 0 0 1 1.024 2.258V12a3 3 0 0 1-3 3zm0 0v4m-6 2v-2h12v2m-8-2v2m4-2v2");
}

.x_zu3to0m {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M14.333 15H9.667a3 3 0 0 1-3-3V9.028A3 3 0 0 1 7.691 6.77l2.333-2.041a3 3 0 0 1 3.952 0l2.333 2.041a3 3 0 0 1 1.024 2.258V12a3 3 0 0 1-3 3");
}
</style><g class="ft5dv1b6b"><path class="x_zu3to0m"/><path class="v9q4vdwqk"/></g>`,
		"fallback": "coolicons:house-geothermal-duotone-round",
	});
}

export default Component;
