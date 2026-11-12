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

.jw6mp7b2m {
  d: path("M16 6v3a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0m-1 5h.01a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2M2.293 16.293l1-1a5.243 5.243 0 0 1 7.414 0l5 5a.999.999 0 1 1-1.414 1.414l-5-5a3.24 3.24 0 0 0-4.586 0l-1 1a.999.999 0 1 1-1.414-1.414");
}

.wr_1xqtvh {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z");
}
</style><g class="cuyn6tgcc"><path class="wr_1xqtvh"/><path class="jw6mp7b2m"/></g>`,
		"fallback": "coolicons:image-warning-bulk-round",
	});
}

export default Component;
