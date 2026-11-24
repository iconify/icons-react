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

.smdpmubkb {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 9c1.819-6.366 9.428-6.115 10.791 0H12a4 4 0 0 0-4 4v6H7A5 5 0 0 1 7 9m6 12v-3l5-5l3 3l-5 5Z");
}

.ss69513yz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 19A5 5 0 0 1 7 9c1.819-6.366 9.428-6.115 10.79 0M13 21v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="smdpmubkb"/><path class="ss69513yz"/></g>`,
		"fallback": "coolicons:cloud-edit-corner-duotone-round",
	});
}

export default Component;
