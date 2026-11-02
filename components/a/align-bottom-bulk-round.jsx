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

.ph--7j4dz {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 7v6a4 4 0 0 1-8 0V7a4 4 0 0 1 8 0m10 4v2a4 4 0 0 1-8 0v-2a4 4 0 0 1 8 0");
}

.vpnnq-b4m {
  d: path("M3 19h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="ph--7j4dz"/><path class="vpnnq-b4m"/></g>`,
		"fallback": "coolicons:align-bottom-bulk-round",
	});
}

export default Component;
