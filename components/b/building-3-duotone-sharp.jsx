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

.iiuc31b7m {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M5 20v-7l5-4l5 4v7m-8-8.6V4h12v16");
}

.z--merhua {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 13v7H5v-7l5-4Z");
}
</style><g class="ft5dv1b6b"><path class="z--merhua"/><path class="iiuc31b7m"/></g>`,
		"fallback": "coolicons:building-3-duotone-sharp",
	});
}

export default Component;
