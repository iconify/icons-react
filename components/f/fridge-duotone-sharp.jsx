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
		"content": `<style>.ckjqj_b3x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 3h14v18H5Z");
}

.ft5dv1b6b {
  fill: none;
}

.ulocjdb4e {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3h14v18H5Zm0 7h14m-4-4v1m0 7v3");
}
</style><g class="ft5dv1b6b"><path class="ckjqj_b3x"/><path class="ulocjdb4e"/></g>`,
		"fallback": "coolicons:fridge-duotone-sharp",
	});
}

export default Component;
