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

.lswf04s6w {
  d: path("M184 58.33v139.34A72 72 0 0 1 64 144v-32a72 72 0 0 1 120-53.67");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.na2hxobav {
  d: path("M190 192.33a8 8 0 0 1-.63 11.3A80 80 0 0 1 56.4 152H40a8 8 0 0 1 0-16h16v-16H40a8 8 0 0 1 0-16h16.4a80 80 0 0 1 132.94-51.63a8 8 0 0 1-10.68 11.93A64 64 0 0 0 72.52 104H136a8 8 0 0 1 0 16H72v16h48a8 8 0 0 1 0 16H72.52a64 64 0 0 0 106.14 39.71a8 8 0 0 1 11.34.62");
}
</style><g class="cuyn6tgcc"><path class="lswf04s6w"/><path class="na2hxobav"/></g>`,
		"fallback": "ph:currency-eur-duotone",
	});
}

export default Component;
