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
		"content": `<style>.bls7-mbul {
  d: path("M6 12v-2a2 2 0 0 1 2-2h2a1 1 0 0 1 0 2H8v2a1 1 0 0 1-2 0m12 2a2 2 0 0 1-2 2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.trdjr4bpx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="trdjr4bpx"/><path class="bls7-mbul"/></g>`,
		"fallback": "coolicons:aspect-ratio-bulk",
	});
}

export default Component;
