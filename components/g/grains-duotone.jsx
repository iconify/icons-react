import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.sf6r23bbm {
  d: path("M208 64v56a80 80 0 0 0-80 80a80 80 0 0 0-80-80V64a79.7 79.7 0 0 1 36.05 8.59C95.62 40.19 128 24 128 24s32.39 16.19 44 48.58A79.6 79.6 0 0 1 208 64");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vcrwc_byb {
  d: path("M208 56a87.5 87.5 0 0 0-31.85 6c-14.32-29.7-43.25-44.46-44.57-45.13a8 8 0 0 0-7.16 0c-1.33.67-30.25 15.43-44.57 45.13A87.5 87.5 0 0 0 48 56a8 8 0 0 0-8 8v80a88 88 0 0 0 176 0V64a8 8 0 0 0-8-8m-88 159.56A72.1 72.1 0 0 1 56 144v-15.56A72.1 72.1 0 0 1 120 200Zm0-66.1a88 88 0 0 0-64-37.09V72.44A72.1 72.1 0 0 1 120 144ZM94.15 69.11c9.22-19.22 26.43-31.35 33.85-35.91c7.44 4.54 24.6 16.6 33.84 35.91A88.5 88.5 0 0 0 128 107.36a88.5 88.5 0 0 0-33.85-38.25M200 144a72.1 72.1 0 0 1-64 71.56V200a72.1 72.1 0 0 1 64-71.56Zm0-31.63a88 88 0 0 0-64 37.09V144a72.1 72.1 0 0 1 64-71.56Z");
}
</style><g class="cuyn6tgcc"><path class="sf6r23bbm"/><path class="vcrwc_byb"/></g>`,
		"fallback": "ph:grains-duotone",
	});
}

export default Component;
