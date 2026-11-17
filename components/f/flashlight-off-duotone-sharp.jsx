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

.ixpqzkewc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 6l6 6l-4 4h-3l-5 5l-3-3l5-5v-3zM9 9l6 6");
}

.rjm6sl4pa {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 6l6 6l-4 4h-3l-5 5l-3-3l5-5v-3Z");
}
</style><g class="ft5dv1b6b"><path class="rjm6sl4pa"/><path class="ixpqzkewc"/></g>`,
		"fallback": "coolicons:flashlight-off-duotone-sharp",
	});
}

export default Component;
