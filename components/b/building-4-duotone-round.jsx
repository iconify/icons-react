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

.lyuar38dt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 20H5V8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4ZM9 7a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm0 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z");
}

.rr4fg8bjn {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M5 20V8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v12m0-11a4 4 0 0 1 4 4v7M9 8h2m-2 4h2");
}
</style><g class="ft5dv1b6b"><path class="lyuar38dt"/><path class="rr4fg8bjn"/></g>`,
		"fallback": "coolicons:building-4-duotone-round",
	});
}

export default Component;
