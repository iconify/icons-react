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

.rrho5ub6z {
  d: path("M3 22a1 1 0 0 1 0-2h6v-3a3 3 0 1 1 6 0v3h6a1 1 0 0 1 0 2Zm10-2v-3a1 1 0 0 0-2 0v3Z");
}

.tswdprbhf {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0l8 7c.217.19.341.465.341.753v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm11 7a2 2 0 1 0-4 0v4h4Z");
}
</style><g class="cuyn6tgcc"><path class="tswdprbhf"/><path class="rrho5ub6z"/></g>`,
		"fallback": "coolicons:house-alt-2-bulk-sharp",
	});
}

export default Component;
