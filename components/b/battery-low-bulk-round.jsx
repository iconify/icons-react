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

.hn13l6b8j {
  d: path("M7 10v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0m15 0v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0");
}

.sjr9x5bay {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 10a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z");
}
</style><g class="cuyn6tgcc"><path class="sjr9x5bay"/><path class="hn13l6b8j"/></g>`,
		"fallback": "coolicons:battery-low-bulk-round",
	});
}

export default Component;
