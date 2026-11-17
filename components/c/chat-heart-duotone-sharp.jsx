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

.t2r6mix0j {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 17H7l-4 4V3h18Z");
}

.u0kl04bdv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17H7l-4 4V3h18v14zm0-8c-1-2-4-2-4 0s4 4 4 4s4-2 4-4s-3-2-4 0");
}
</style><g class="ft5dv1b6b"><path class="t2r6mix0j"/><path class="u0kl04bdv"/></g>`,
		"fallback": "coolicons:chat-heart-duotone-sharp",
	});
}

export default Component;
