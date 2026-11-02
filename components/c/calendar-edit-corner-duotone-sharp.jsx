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
		"content": `<style>.e1dp17b5q {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 10H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-7 11v-3l5-5l3 3l-5 5Z");
}

.ft5dv1b6b {
  fill: none;
}

.lun46mbvz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 21H4V5h16v4M8 3v2m8-2v2M4 9h16m-7 12v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="e1dp17b5q"/><path class="lun46mbvz"/></g>`,
		"fallback": "coolicons:calendar-edit-corner-duotone-sharp",
	});
}

export default Component;
