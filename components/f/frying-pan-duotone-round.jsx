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

.i-vybo3lr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11h12v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm12 0l6-3");
}

.ykxpg6bcj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 11v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-1Z");
}
</style><g class="ft5dv1b6b"><path class="ykxpg6bcj"/><path class="i-vybo3lr"/></g>`,
		"fallback": "coolicons:frying-pan-duotone-round",
	});
}

export default Component;
