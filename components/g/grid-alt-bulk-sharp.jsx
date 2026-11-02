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

.xam6kbw8x {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z");
}

.y76rj4t7k {
  d: path("M10 8h4V4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2h-4v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4h-4v4a1 1 0 0 1-2 0v-4H4a1 1 0 0 1 0-2h4v-4H4a1 1 0 0 1 0-2h4V4a1 1 0 0 1 2 0Zm4 2h-4v4h4Z");
}
</style><g class="cuyn6tgcc"><path class="xam6kbw8x"/><path class="y76rj4t7k"/></g>`,
		"fallback": "coolicons:grid-alt-bulk-sharp",
	});
}

export default Component;
