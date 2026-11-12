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
		"content": `<style>.e5m3xw56u {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm0 2h16M8 3v2m8-2v2");
}

.ft5dv1b6b {
  fill: none;
}

.ocsocob9f {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 9h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z");
}
</style><g class="ft5dv1b6b"><path class="ocsocob9f"/><path class="e5m3xw56u"/></g>`,
		"fallback": "coolicons:calendar-duotone",
	});
}

export default Component;
