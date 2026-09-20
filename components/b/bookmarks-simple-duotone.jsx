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

.k_vvsjbfj {
  d: path("M168 72v152l-56-40l-56 40V72a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kdb5ic2vu {
  d: path("M160 56H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224V72a16 16 0 0 0-16-16m0 152.46l-43.36-31a8 8 0 0 0-9.3 0L64 208.45V72h96ZM208 40v152a8 8 0 0 1-16 0V40H88a8 8 0 0 1 0-16h104a16 16 0 0 1 16 16");
}
</style><g class="cuyn6tgcc"><path class="k_vvsjbfj"/><path class="kdb5ic2vu"/></g>`,
		"fallback": "ph:bookmarks-simple-duotone",
	});
}

export default Component;
