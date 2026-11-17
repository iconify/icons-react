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
		"content": `<style>.bm1kp1bis {
  d: path("M3 2h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m16 4a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm-6 5v1.171a3 3 0 1 1-2 0V15a1 1 0 0 1 2 0");
}

.cuyn6tgcc {
  fill: currentColor;
}

.rgj22sbli {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 2h14a1 1 0 0 1 1 1v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="rgj22sbli"/><path class="bm1kp1bis"/></g>`,
		"fallback": "coolicons:blinds-bulk-round",
	});
}

export default Component;
