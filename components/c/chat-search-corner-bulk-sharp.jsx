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
		"content": `<style>.c_bxyol0n {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 10H10v7a1 1 0 0 1-1 1H7.414l-3.707 3.707A1 1 0 0 1 2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.k08l-hb5z {
  d: path("M17.907 19.321a3.83 3.83 0 1 1 1.414-1.414l2.386 2.386a.999.999 0 1 1-1.414 1.414Zm-.614-2.028a1.829 1.829 0 1 0-2.587-2.586a1.829 1.829 0 0 0 2.587 2.586");
}
</style><g class="cuyn6tgcc"><path class="c_bxyol0n"/><path class="k08l-hb5z"/></g>`,
		"fallback": "coolicons:chat-search-corner-bulk-sharp",
	});
}

export default Component;
