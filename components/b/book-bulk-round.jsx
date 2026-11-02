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

.e4t0_4b7x {
  d: path("M13 20a3.004 3.004 0 0 0 3-3a1 1 0 0 1 2 0a5 5 0 0 1-1.464 3.536A4.97 4.97 0 0 1 13 22H7a2.998 2.998 0 0 1-2.597-4.501A3 3 0 0 1 7 16a1 1 0 0 1 0 2a1.002 1.002 0 0 0-.707 1.707A.97.97 0 0 0 7 20Z");
}

.l5uqqklos {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 19V7a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v8a3 3 0 0 1-3 3H7a1 1 0 0 0-1 1a1 1 0 0 1-2 0");
}
</style><g class="cuyn6tgcc"><path class="l5uqqklos"/><path class="e4t0_4b7x"/></g>`,
		"fallback": "coolicons:book-bulk-round",
	});
}

export default Component;
