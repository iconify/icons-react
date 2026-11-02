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

.k27y2achw {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 18H3a1 1 0 0 1-1-1C2 11.477 6.477 7 12 7s10 4.477 10 10a1 1 0 0 1-1 1");
}

.nnv2zhbko {
  d: path("m7.168 9.555l-2-3a1 1 0 0 1 1.664-1.11l2 3a1 1 0 0 1-1.664 1.11m8-1.11l2-3a1 1 0 0 1 1.664 1.11l-2 3a1 1 0 0 1-1.664-1.11M8.01 12a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Zm8 0a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="k27y2achw"/><path class="nnv2zhbko"/></g>`,
		"fallback": "coolicons:android-bulk-round",
	});
}

export default Component;
