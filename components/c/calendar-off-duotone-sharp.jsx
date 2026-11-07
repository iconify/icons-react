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

.tq5uq8bxy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 9H4V5h1Zm2-4h9v4h-5Z");
}

.z0s542bxp {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 21H4V4m7 1h9v9M4 9h5m6 0h5m-4-6v2M2 2l20 20");
}
</style><g class="ft5dv1b6b"><path class="tq5uq8bxy"/><path class="z0s542bxp"/></g>`,
		"fallback": "coolicons:calendar-off-duotone-sharp",
	});
}

export default Component;
