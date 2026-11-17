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

.mff6osbjl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 16L15 4l6 6l-10 10H7Z");
}

.y9mnqqtwa {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m15 16l6-6l-6-6l-6 6m2 10h10M9 10l6 6m-6-6l-6 6l4 4h4l4-4");
}
</style><g class="ft5dv1b6b"><path class="mff6osbjl"/><path class="y9mnqqtwa"/></g>`,
		"fallback": "coolicons:eraser-duotone-sharp",
	});
}

export default Component;
