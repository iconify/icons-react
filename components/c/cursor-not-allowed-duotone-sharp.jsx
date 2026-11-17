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
		"content": `<style>.dgtsa1nsc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 3l12 4l-4 1l2 2l-3 3l-2-2l-1 4zm16 11a3.606 3.606 0 1 1-4 6a3.606 3.606 0 0 1 4-6m-4 6l4-6");
}

.ft5dv1b6b {
  fill: none;
}

.pkw46le2d {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m3 3l12 4l-4 1l2 2l-3 3l-2-2l-1 4Z");
}
</style><g class="ft5dv1b6b"><path class="pkw46le2d"/><path class="dgtsa1nsc"/></g>`,
		"fallback": "coolicons:cursor-not-allowed-duotone-sharp",
	});
}

export default Component;
