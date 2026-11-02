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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.iz1sfcctr {
  d: path("M5 3v18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0");
}

.yfoifzbac {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 3h6a4 4 0 0 1 0 8h-6a4 4 0 0 1 0-8m0 10h2a4 4 0 0 1 0 8h-2a4 4 0 0 1 0-8");
}
</style><g class="cuyn6tgcc"><path class="yfoifzbac"/><path class="iz1sfcctr"/></g>`,
		"fallback": "coolicons:align-left-bulk-round",
	});
}

export default Component;
