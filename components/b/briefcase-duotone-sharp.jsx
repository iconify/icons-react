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

.gceg1wbfr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 8h18v12H3Z");
}

.xb7s2gbtz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8h18v12H3Zm5 0a4 4 0 1 1 8 0");
}
</style><g class="ft5dv1b6b"><path class="gceg1wbfr"/><path class="xb7s2gbtz"/></g>`,
		"fallback": "coolicons:briefcase-duotone-sharp",
	});
}

export default Component;
