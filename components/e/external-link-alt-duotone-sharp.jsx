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
		"content": `<style>.coh3tkbov {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 19h5V5H5v5m-1 5h5v5m0-5l-6 6");
}

.ft5dv1b6b {
  fill: none;
}

.nq6h01f_i {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 19V5h14v14Z");
}
</style><g class="ft5dv1b6b"><path class="nq6h01f_i"/><path class="coh3tkbov"/></g>`,
		"fallback": "coolicons:external-link-alt-duotone-sharp",
	});
}

export default Component;
