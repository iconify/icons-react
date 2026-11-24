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

.mo0d_wboa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 19h14v-3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0Z");
}

.t-qzdgb7e {
  d: path("m11.293 16.707l-4-4a.999.999 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 2 0v9.586l2.293-2.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0");
}
</style><g class="cuyn6tgcc"><path class="mo0d_wboa"/><path class="t-qzdgb7e"/></g>`,
		"fallback": "coolicons:download-bulk-sharp",
	});
}

export default Component;
