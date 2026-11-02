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

.ipmu5pbfw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0");
}

.xnoksbc8x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}
</style><g class="ft5dv1b6b"><path class="xnoksbc8x"/><path class="ipmu5pbfw"/></g>`,
		"fallback": "coolicons:circle-small-duotone-round",
	});
}

export default Component;
