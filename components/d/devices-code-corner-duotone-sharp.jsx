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

.r0l1-9l0l {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 3v10h-6V3Z");
}

.rhza-eb4k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 3h6v10h-6Zm-4 1H3v12h7m5 1l-2 2l2 2m4-4l2 2l-2 2");
}
</style><g class="ft5dv1b6b"><path class="r0l1-9l0l"/><path class="rhza-eb4k"/></g>`,
		"fallback": "coolicons:devices-code-corner-duotone-sharp",
	});
}

export default Component;
