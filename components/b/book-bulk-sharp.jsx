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

.sj4yyyvig {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 19V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 0-1 1a1 1 0 0 1-2 0");
}

.yl4ucxi8b {
  d: path("M7 20h9v-3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1H7a2.998 2.998 0 0 1-2.597-4.501A3 3 0 0 1 7 16a1 1 0 0 1 0 2a1.002 1.002 0 0 0-.707 1.707A.97.97 0 0 0 7 20");
}
</style><g class="cuyn6tgcc"><path class="sj4yyyvig"/><path class="yl4ucxi8b"/></g>`,
		"fallback": "coolicons:book-bulk-sharp",
	});
}

export default Component;
