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
		"content": `<style>.bq6p6mbxj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 19v-9l-1-1a4 4 0 0 1 4-4h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3c-.763 0-1.479.48-2 1ZM8 5a4 4 0 0 1 4 4l-1 1v9l-1-1c-.521-.52-1.237-1-2-1H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z");
}

.ft5dv1b6b {
  fill: none;
}

.r-lqps64o {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 20V9a4 4 0 0 1 4-4h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3c-.64 0-1.36.36-2 1zm0 0V9a4 4 0 0 0-4-4H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3c.64 0 1.36.36 2 1z");
}
</style><g class="ft5dv1b6b"><path class="bq6p6mbxj"/><path class="r-lqps64o"/></g>`,
		"fallback": "coolicons:book-open-duotone",
	});
}

export default Component;
