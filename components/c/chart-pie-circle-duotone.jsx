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
		"content": `<style>.dkkg_gbvz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 12a9 9 0 1 0-9 9v-9zm-6 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}

.ft5dv1b6b {
  fill: none;
}

.rsj02cb4x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 12h-9v9a9 9 0 0 1-9-9a9 9 0 0 1 9-9a9 9 0 0 1 9 9");
}
</style><g class="ft5dv1b6b"><path class="rsj02cb4x"/><path class="dkkg_gbvz"/></g>`,
		"fallback": "coolicons:chart-pie-circle-duotone",
	});
}

export default Component;
