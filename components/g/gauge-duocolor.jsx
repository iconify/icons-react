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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u-30pfaun {
  stroke-opacity: 0.4;
  d: path("m12 13l3-3");
}

.w-kv2jb1n {
  d: path("M6 19a8.485 8.485 0 1 1 12 0");
}
</style><g class="nrj6p8qat"><path class="u-30pfaun"/><path class="w-kv2jb1n"/></g>`,
		"fallback": "coolicons:gauge-duocolor",
	});
}

export default Component;
