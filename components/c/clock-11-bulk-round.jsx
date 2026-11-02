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

.riis51qtn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12");
}

.w7tx-rbyv {
  d: path("M13 12a1 1 0 0 1-1.8.6l-3-4a1 1 0 0 1 1.6-1.2L11 9V7a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="riis51qtn"/><path class="w7tx-rbyv"/></g>`,
		"fallback": "coolicons:clock-11-bulk-round",
	});
}

export default Component;
