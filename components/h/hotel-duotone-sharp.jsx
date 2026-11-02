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

.jnh5_l2ry {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M5 21V3h14v18M8 7h.01M8 11h.01M12 7h.01M12 11h.01M16 7h.01M16 11h.01M9 16h6m-5 5v-5m4 5v-5");
}

.oj70tvpuz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 21V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1");
}
</style><g class="ft5dv1b6b"><path class="oj70tvpuz"/><path class="jnh5_l2ry"/></g>`,
		"fallback": "coolicons:hotel-duotone-sharp",
	});
}

export default Component;
