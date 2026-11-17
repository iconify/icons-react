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
		"content": `<style>.e7_9r5b7f {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 6a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0Zm-4-2H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h3m5 1l-2 2l2 2m4-4l2 2l-2 2");
}

.ft5dv1b6b {
  fill: none;
}

.kbc_4nbnz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 6v4a3 3 0 1 1-6 0V6a3 3 0 1 1 6 0");
}
</style><g class="ft5dv1b6b"><path class="kbc_4nbnz"/><path class="e7_9r5b7f"/></g>`,
		"fallback": "coolicons:devices-code-corner-duotone-round",
	});
}

export default Component;
