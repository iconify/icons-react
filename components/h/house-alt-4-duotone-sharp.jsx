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

.xczztcmgz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 3l9 8l-.013.015L19 9.249V21H5V9.249l-1.987 1.766L3 11Z");
}

.zmh786i6u {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 11l9-8l9 8m-2-1.778V21H5V9.222M12 9l3 2.667V17H9v-5.333z");
}
</style><g class="ft5dv1b6b"><path class="xczztcmgz"/><path class="zmh786i6u"/></g>`,
		"fallback": "coolicons:house-alt-4-duotone-sharp",
	});
}

export default Component;
