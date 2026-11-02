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

.onffe2clz {
  d: path("M4.629 8.886A8.002 8.002 0 0 1 20 12a1 1 0 0 1-2 0a6 6 0 1 0-12 0a1 1 0 0 1-2 0a7.9 7.9 0 0 1 .629-3.114");
}

.vofc4_bbb {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 11h5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1m13 0h5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="vofc4_bbb"/><path class="onffe2clz"/></g>`,
		"fallback": "coolicons:headphones-bulk-sharp",
	});
}

export default Component;
