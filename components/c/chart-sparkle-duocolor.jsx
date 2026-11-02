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

.vd5e6cbev {
  stroke-opacity: 0.4;
  d: path("M18 3c0 1 2 3 3 3c-1 0-3 2-3 3c0-1-2-3-3-3c1 0 3-2 3-3");
}

.wey6vjbaf {
  d: path("m3 16l4-4a1.414 1.414 0 0 1 2 0l2 2a1.414 1.414 0 0 0 2 0l2-2M3 4v14a2 2 0 0 0 2 2h16");
}
</style><g class="nrj6p8qat"><path class="vd5e6cbev"/><path class="wey6vjbaf"/></g>`,
		"fallback": "coolicons:chart-sparkle-duocolor",
	});
}

export default Component;
