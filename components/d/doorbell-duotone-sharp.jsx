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

.g4jo93baq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 3h12v18H6Z");
}

.t7ytmab8v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 3h12v18H6Zm4 5h4m-4 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><g class="ft5dv1b6b"><path class="g4jo93baq"/><path class="t7ytmab8v"/></g>`,
		"fallback": "coolicons:doorbell-duotone-sharp",
	});
}

export default Component;
