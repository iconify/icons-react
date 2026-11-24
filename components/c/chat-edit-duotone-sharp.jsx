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

.t0fsy9ymt {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17H7l-4 4V3h18v14zm-3-4v-2l4-4l2 2l-4 4Z");
}

.t2r6mix0j {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 17H7l-4 4V3h18Z");
}
</style><g class="ft5dv1b6b"><path class="t2r6mix0j"/><path class="t0fsy9ymt"/></g>`,
		"fallback": "coolicons:chat-edit-duotone-sharp",
	});
}

export default Component;
