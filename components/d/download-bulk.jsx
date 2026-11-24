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

.gm80qtbdn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 2 0Z");
}

.t-qzdgb7e {
  d: path("m11.293 16.707l-4-4a.999.999 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 2 0v9.586l2.293-2.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0");
}
</style><g class="cuyn6tgcc"><path class="gm80qtbdn"/><path class="t-qzdgb7e"/></g>`,
		"fallback": "coolicons:download-bulk",
	});
}

export default Component;
