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

.f--irmbsa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21H8a5 5 0 0 1-5-5Z");
}

.y76rj4t7k {
  d: path("M10 8h4V4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2h-4v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4h-4v4a1 1 0 0 1-2 0v-4H4a1 1 0 0 1 0-2h4v-4H4a1 1 0 0 1 0-2h4V4a1 1 0 0 1 2 0Zm4 2h-4v4h4Z");
}
</style><g class="cuyn6tgcc"><path class="f--irmbsa"/><path class="y76rj4t7k"/></g>`,
		"fallback": "coolicons:grid-alt-bulk-round",
	});
}

export default Component;
