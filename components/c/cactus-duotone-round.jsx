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

.k26hz_bgu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 6a4 4 0 0 1 8 0v15a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Z");
}

.pjzo1n1vy {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 21V6a3 3 0 0 1 6 0v15M5 21h14M9 15H8a3 3 0 0 1-3-3V8m10 4h1a3 3 0 0 0 3-3V6");
}
</style><g class="ft5dv1b6b"><path class="k26hz_bgu"/><path class="pjzo1n1vy"/></g>`,
		"fallback": "coolicons:cactus-duotone-round",
	});
}

export default Component;
