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

.e3i2-rvya {
  d: path("M11 3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0Zm10 19H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2");
}

.nk_ba0_ii {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 6h18a1 1 0 0 1 .832 1.555l-4 6A1 1 0 0 1 17 14h-1v7a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-7H7a1 1 0 0 1-.832-.445l-4-6A1 1 0 0 1 3 6m4.279 2h-2.41l2.666 4h1.078Zm6 4l1.334-4H9.387l1.334 4Zm2.108 0h1.078l2.666-4h-2.41Z");
}
</style><g class="cuyn6tgcc"><path class="nk_ba0_ii"/><path class="e3i2-rvya"/></g>`,
		"fallback": "coolicons:control-tower-bulk-sharp",
	});
}

export default Component;
