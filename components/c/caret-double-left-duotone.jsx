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

.md51ihzsv {
  d: path("M203.06 40.61a8 8 0 0 0-8.72 1.73l-80 80a8 8 0 0 0 0 11.32l80 80A8 8 0 0 0 208 208V48a8 8 0 0 0-4.94-7.39M192 188.69L131.31 128L192 67.31Zm-66.34 13.65a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L51.31 128Z");
}

.y63ozfbbb {
  d: path("M200 48v160l-80-80Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="y63ozfbbb"/><path class="md51ihzsv"/></g>`,
		"fallback": "ph:caret-double-left-duotone",
	});
}

export default Component;
