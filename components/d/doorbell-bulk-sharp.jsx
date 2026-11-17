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

.jd0ciui0b {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}

.l0venub_k {
  d: path("M10 7h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2m-1 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><g class="cuyn6tgcc"><path class="jd0ciui0b"/><path class="l0venub_k"/></g>`,
		"fallback": "coolicons:doorbell-bulk-sharp",
	});
}

export default Component;
