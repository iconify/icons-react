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

.ts82lc2hg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4v16h6V4Zm10 2v12h6V6ZM3 12h18");
}

.zx9lhrb7s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 4h6v16H4Zm10 2h6v12h-6Z");
}
</style><g class="ft5dv1b6b"><path class="zx9lhrb7s"/><path class="ts82lc2hg"/></g>`,
		"fallback": "coolicons:align-center-vertical-duotone-sharp",
	});
}

export default Component;
