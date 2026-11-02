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

.ua43k_mnx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M14 8a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Zm6 4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2ZM8 14a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Z");
}

.w3b1fp1ch {
  d: path("M7 11a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm6-6a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm4 4V3a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0m-6 12V9a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0m8 0a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0ZM7 21a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="ua43k_mnx"/><path class="w3b1fp1ch"/></g>`,
		"fallback": "coolicons:equalizer-bulk",
	});
}

export default Component;
