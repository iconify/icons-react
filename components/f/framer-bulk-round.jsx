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
		"content": `<style>.bt23kfbkz {
  d: path("M6 2h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-.707-.293l-6-6A1 1 0 0 1 6 2m11 6V4H8.414l4 4ZM6 14h6a1 1 0 0 1 1 1v6a1.002 1.002 0 0 1-1.707.707l-6-6A1 1 0 0 1 6 14m5 4.586V16H8.414Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.cxpfe8woi {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 8h6c.265 0 .52.105.707.293l6 6A1 1 0 0 1 18 16H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="cxpfe8woi"/><path class="bt23kfbkz"/></g>`,
		"fallback": "coolicons:framer-bulk-round",
	});
}

export default Component;
