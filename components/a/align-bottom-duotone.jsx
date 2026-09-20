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

.db9lkjbys {
  d: path("M64 192h40a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16m0-152h40v136H64Zm160 176a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-72-24h40a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16h-40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16m0-112h40v96h-40Z");
}

.gybb2x-qd {
  d: path("M200 80v96a8 8 0 0 1-8 8h-40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8m-96-48H64a8 8 0 0 0-8 8v136a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="gybb2x-qd"/><path class="db9lkjbys"/></g>`,
		"fallback": "ph:align-bottom-duotone",
	});
}

export default Component;
