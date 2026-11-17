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

.fn6lefoka {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.659 2.247l5.714 5A1.001 1.001 0 0 1 17.714 9H9v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0");
}

.k08l-hb5z {
  d: path("M17.907 19.321a3.83 3.83 0 1 1 1.414-1.414l2.386 2.386a.999.999 0 1 1-1.414 1.414Zm-.614-2.028a1.829 1.829 0 1 0-2.587-2.586a1.829 1.829 0 0 0 2.587 2.586");
}
</style><g class="cuyn6tgcc"><path class="fn6lefoka"/><path class="k08l-hb5z"/></g>`,
		"fallback": "coolicons:house-search-corner-bulk-sharp",
	});
}

export default Component;
