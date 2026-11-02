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
		"content": `<style>.dzq5r_fhp {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2m10 10a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2M5 3v2m4-2v2m6 14v2m4-2v2M7 9a3 3 0 0 0 3 3h4a3 3 0 0 1 3 3");
}

.ft5dv1b6b {
  fill: none;
}

.lk1166vkd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 4h4a3 3 0 1 1 0 6H5a3 3 0 1 1 0-6m10 10h4a3 3 0 1 1 0 6h-4a3 3 0 1 1 0-6");
}
</style><g class="ft5dv1b6b"><path class="lk1166vkd"/><path class="dzq5r_fhp"/></g>`,
		"fallback": "coolicons:cable-duotone-round",
	});
}

export default Component;
