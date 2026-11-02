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
		"content": `<style>.cjxs-8b7m {
  d: path("M7 17a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Zm4-6v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0m4 6a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Zm4-6v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0m2 9a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.xiyws2afe {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.406 2.086l9 4A1 1 0 0 1 21 8H3a1 1 0 0 1-.406-1.914l9-4a1 1 0 0 1 .812 0");
}
</style><g class="cuyn6tgcc"><path class="xiyws2afe"/><path class="cjxs-8b7m"/></g>`,
		"fallback": "coolicons:bank-bulk-sharp",
	});
}

export default Component;
