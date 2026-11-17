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
		"content": `<style>.ai237mb3y {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20.659 9.247c.217.19.341.465.341.753v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.xpk2g1dko {
  d: path("M16 11v4a1 1 0 0 1-2 0v-1.586l-4.293 4.293a.999.999 0 1 1-1.414-1.414L12.586 12H11a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1");
}
</style><g class="cuyn6tgcc"><path class="ai237mb3y"/><path class="xpk2g1dko"/></g>`,
		"fallback": "coolicons:house-arrow-up-right-bulk-sharp",
	});
}

export default Component;
