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

.qefa9xb9o {
  d: path("M11 3v3a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0m4 0v3a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0M6 9h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2");
}

.wtvw8kbdh {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 15a3 3 0 0 1-3-3V7a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v5a3 3 0 0 1-3 3h-1v4a3 3 0 1 1-6 0v-4Z");
}
</style><g class="cuyn6tgcc"><path class="wtvw8kbdh"/><path class="qefa9xb9o"/></g>`,
		"fallback": "coolicons:brush-bulk-round",
	});
}

export default Component;
