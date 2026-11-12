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
		"content": `<style>.c1b__8bbs {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.nw82umbye {
  d: path("M7 6h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m0 4h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2M6 21v-6a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0m10 0v-6a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0");
}
</style><g class="cuyn6tgcc"><path class="c1b__8bbs"/><path class="nw82umbye"/></g>`,
		"fallback": "coolicons:billboard-bulk",
	});
}

export default Component;
