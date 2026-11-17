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

.g0_m79bap {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2v10a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2");
}

.xgkhdvb0w {
  d: path("M12 11h2a.998.998 0 0 1 .8 1.6l-3 4a1 1 0 0 1-1.6-1.2L12 13h-2a.998.998 0 0 1-.8-1.6l3-4a1 1 0 0 1 1.6 1.2Z");
}
</style><g class="cuyn6tgcc"><path class="g0_m79bap"/><path class="xgkhdvb0w"/></g>`,
		"fallback": "coolicons:fuse-bulk",
	});
}

export default Component;
