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

.qd8fjjbzh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17H7l-4 4V3h18v14zm-2-9l4 4m0-4l-4 4");
}

.t2r6mix0j {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 17H7l-4 4V3h18Z");
}
</style><g class="ft5dv1b6b"><path class="t2r6mix0j"/><path class="qd8fjjbzh"/></g>`,
		"fallback": "coolicons:chat-close-duotone-sharp",
	});
}

export default Component;
