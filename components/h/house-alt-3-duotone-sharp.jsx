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
		"content": `<style>.dz89iccgx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 11l9-8l9 8m-2-1.778V21H5V9.222");
}

.ft5dv1b6b {
  fill: none;
}

.xczztcmgz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 3l9 8l-.013.015L19 9.249V21H5V9.249l-1.987 1.766L3 11Z");
}
</style><g class="ft5dv1b6b"><path class="xczztcmgz"/><path class="dz89iccgx"/></g>`,
		"fallback": "coolicons:house-alt-3-duotone-sharp",
	});
}

export default Component;
