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

.ftyha7-_g {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 9L6 6m10 3l2-3M8 13h.01M16 13h.01M3 17a9 9 0 0 1 18 0z");
}

.t4-q9pkxs {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 17H3a9 9 0 0 1 9-9a9 9 0 0 1 9 9");
}
</style><g class="ft5dv1b6b"><path class="t4-q9pkxs"/><path class="ftyha7-_g"/></g>`,
		"fallback": "coolicons:android-duotone-sharp",
	});
}

export default Component;
