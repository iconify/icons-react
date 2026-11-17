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
		"content": `<style>.a0lmbqnva {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17H4v-2c0-1 1-1 1-2v-3a7 7 0 0 1 14 0v3c0 1 1 1 1 2v2zm-3 0v1a3 3 0 0 0 6 0v-1");
}

.ft5dv1b6b {
  fill: none;
}

.wyt1wacoz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 17h-5v1a3 3 0 1 1-6 0v-1H4v-2c0-1 1-1 1-2v-3a7 7 0 1 1 14 0v3c0 1 1 1 1 2Z");
}
</style><g class="ft5dv1b6b"><path class="wyt1wacoz"/><path class="a0lmbqnva"/></g>`,
		"fallback": "coolicons:bell-duotone-sharp",
	});
}

export default Component;
