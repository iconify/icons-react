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
		"content": `<style>.bvfqhzb5k {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 3h18v18H3Z");
}

.cj9dpd3hc {
  d: path("M22 17v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V4H4v16h16v-3a1 1 0 0 1 2 0m-7.707-2.707L15.586 13H8a1 1 0 0 1 0-2h7.586l-1.293-1.293a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="bvfqhzb5k"/><path class="cj9dpd3hc"/></g>`,
		"fallback": "coolicons:exit-bulk-sharp",
	});
}

export default Component;
