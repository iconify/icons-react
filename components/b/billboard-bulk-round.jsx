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

.nw82umbye {
  d: path("M7 6h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m0 4h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2M6 21v-6a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0m10 0v-6a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0");
}

.obuwcliev {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="obuwcliev"/><path class="nw82umbye"/></g>`,
		"fallback": "coolicons:billboard-bulk-round",
	});
}

export default Component;
