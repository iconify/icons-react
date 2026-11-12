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

.v67uszbsv {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8.414 11h7.172l-1.293-1.293a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L15.586 13H8.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414Z");
}

.wc_-ddckz {
  d: path("M21 4a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm0 14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="v67uszbsv"/><path class="wc_-ddckz"/></g>`,
		"fallback": "coolicons:bandwidth-bulk-sharp",
	});
}

export default Component;
