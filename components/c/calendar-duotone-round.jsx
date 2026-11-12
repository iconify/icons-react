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

.gay5d-bcp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 9h16v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z");
}

.mfy4cdcre {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 9a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm0 0h16M8 3v2m8-2v2");
}
</style><g class="ft5dv1b6b"><path class="gay5d-bcp"/><path class="mfy4cdcre"/></g>`,
		"fallback": "coolicons:calendar-duotone-round",
	});
}

export default Component;
