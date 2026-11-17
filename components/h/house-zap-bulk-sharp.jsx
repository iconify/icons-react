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

.k1caz9lkg {
  d: path("M12 12h2a.998.998 0 0 1 .8 1.6l-3 4a1 1 0 0 1-1.6-1.2L12 14h-2a.998.998 0 0 1-.8-1.6l3-4a1 1 0 0 1 1.6 1.2Z");
}
</style><g class="cuyn6tgcc"><path class="ai237mb3y"/><path class="k1caz9lkg"/></g>`,
		"fallback": "coolicons:house-zap-bulk-sharp",
	});
}

export default Component;
