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

.dbk5dnbas {
  d: path("M9.236 11.832A3 3 0 1 1 12 16a1 1 0 0 1 0-2a1.001 1.001 0 0 0 .707-1.707a1 1 0 0 0-1.094-.215A.99.99 0 0 0 11 13a1 1 0 0 1-2 0a3 3 0 0 1 .236-1.168M12.01 17a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="ai237mb3y"/><path class="dbk5dnbas"/></g>`,
		"fallback": "coolicons:house-help-bulk-sharp",
	});
}

export default Component;
