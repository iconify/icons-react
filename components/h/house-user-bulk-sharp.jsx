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

.gosf_ks8m {
  d: path("M9.236 9.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338m2.057 1.875a.999.999 0 1 0 1.414-1.414a.999.999 0 1 0-1.414 1.414m-3.9 7.347A5 5 0 0 1 17 21a1 1 0 0 1-2 0a3 3 0 1 0-6 0a1 1 0 0 1-2 0a4.9 4.9 0 0 1 .393-1.946");
}
</style><g class="cuyn6tgcc"><path class="ai237mb3y"/><path class="gosf_ks8m"/></g>`,
		"fallback": "coolicons:house-user-bulk-sharp",
	});
}

export default Component;
