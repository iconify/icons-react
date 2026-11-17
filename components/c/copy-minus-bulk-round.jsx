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
		"content": `<style>.a4bh2hj8g {
  d: path("M4 9v8a3 3 0 0 0 3 3h8a1 1 0 0 1 0 2H7a5 5 0 0 1-5-5V9a1 1 0 0 1 2 0m7 0h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.lwdgl7bfy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 7a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="lwdgl7bfy"/><path class="a4bh2hj8g"/></g>`,
		"fallback": "coolicons:copy-minus-bulk-round",
	});
}

export default Component;
