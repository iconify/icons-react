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

.qab80b9mo {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 10v11H4V10l8-7Z");
}

.rsed-32fd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l8 7v11H4V10zM9 13a2 2 0 1 0 4 0a2 2 0 0 0-4 0m4 2l2 2");
}
</style><g class="ft5dv1b6b"><path class="qab80b9mo"/><path class="rsed-32fd"/></g>`,
		"fallback": "coolicons:house-search-duotone-sharp",
	});
}

export default Component;
