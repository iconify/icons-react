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

.huzyumb5p {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 15V3l12 6zm0 0v6");
}

.yifi6otqz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 9L6 15V3Z");
}
</style><g class="ft5dv1b6b"><path class="yifi6otqz"/><path class="huzyumb5p"/></g>`,
		"fallback": "coolicons:flag-triangle-duotone-sharp",
	});
}

export default Component;
