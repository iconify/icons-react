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

.hyle18ydz {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}

.jd15n1qhh {
  d: path("M13 7h8a1 1 0 0 1 0 2h-4v2h4a1 1 0 0 1 0 2h-8v2h8a1 1 0 0 1 0 2h-4v3a1 1 0 0 1-2 0v-3H9v3a1 1 0 0 1-2 0v-3H3a1 1 0 0 1 0-2h8v-2H3a1 1 0 0 1 0-2h4V9H3a1 1 0 0 1 0-2h8V4a1 1 0 0 1 2 0Zm-1 2H9v2h6V9Z");
}
</style><g class="cuyn6tgcc"><path class="hyle18ydz"/><path class="jd15n1qhh"/></g>`,
		"fallback": "coolicons:brick-wall-bulk",
	});
}

export default Component;
