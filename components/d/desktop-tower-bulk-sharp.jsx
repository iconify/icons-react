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

.lmufz3bnc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z");
}

.xqxq9ig-w {
  d: path("M17 7h.01a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2m-4 3H4v6h9a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2m5 6a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0ZM6 19h3a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="lmufz3bnc"/><path class="xqxq9ig-w"/></g>`,
		"fallback": "coolicons:desktop-tower-bulk-sharp",
	});
}

export default Component;
