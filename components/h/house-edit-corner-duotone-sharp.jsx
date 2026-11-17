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
		"content": `<style>.f5mm7l6tn {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21H4V10l8-7l5.714 5M13 21v-3l5-5l3 3l-5 5Z");
}

.ft5dv1b6b {
  fill: none;
}

.o7_2ilsag {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17.714 8H8v13H4V10l8-7ZM13 21v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="o7_2ilsag"/><path class="f5mm7l6tn"/></g>`,
		"fallback": "coolicons:house-edit-corner-duotone-sharp",
	});
}

export default Component;
