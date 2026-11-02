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

.pwd407ban {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}

.wz_3ew2hq {
  d: path("M16 6v1a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0M5 9h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m11 5v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="pwd407ban"/><path class="wz_3ew2hq"/></g>`,
		"fallback": "coolicons:fridge-bulk-sharp",
	});
}

export default Component;
