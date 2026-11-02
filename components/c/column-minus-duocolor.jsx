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
		"content": `<style>.ggdjawbvk {
  d: path("M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ub0p4xb7k {
  stroke-opacity: 0.4;
  d: path("M14 12h6");
}
</style><g class="nrj6p8qat"><path class="ub0p4xb7k"/><path class="ggdjawbvk"/></g>`,
		"fallback": "coolicons:column-minus-duocolor",
	});
}

export default Component;
