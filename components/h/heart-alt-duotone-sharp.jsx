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
		"content": `<style>.cgiq_22af {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 6a4.242 4.242 0 1 1 6 6l-7 7l-7-7a4.242 4.242 0 1 1 6-6l1 1Z");
}

.ft5dv1b6b {
  fill: none;
}

.xoycmbcij {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 7l1-1a4.243 4.243 0 0 1 6 6l-7 7l-7-7a4.243 4.243 0 0 1 6-6z");
}
</style><g class="ft5dv1b6b"><path class="cgiq_22af"/><path class="xoycmbcij"/></g>`,
		"fallback": "coolicons:heart-alt-duotone-sharp",
	});
}

export default Component;
