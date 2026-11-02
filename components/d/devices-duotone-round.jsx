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
		"content": `<style>.e577hl5-i {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 13a3 3 0 1 1 6 0v4a3 3 0 1 1-6 0Z");
}

.ft5dv1b6b {
  fill: none;
}

.jxb-x984y {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 13a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0Zm2-7a2 2 0 0 0-2-2H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h4");
}
</style><g class="ft5dv1b6b"><path class="e577hl5-i"/><path class="jxb-x984y"/></g>`,
		"fallback": "coolicons:devices-duotone-round",
	});
}

export default Component;
