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

.gzcjrcf9o {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m9.316 8.051l12 4a1 1 0 0 1-.073 1.919l-2.287.572l1.751 1.751a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0l-1.751-1.751l-.572 2.287a1 1 0 0 1-1.919.073l-4-12a1.001 1.001 0 0 1 1.265-1.265");
}

.n7z4b6otw {
  d: path("M8 3a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm5.293.293a.999.999 0 1 1 1.414 1.414l-1 1a.999.999 0 1 1-1.414-1.414ZM3 10a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm1.707 4.707a.999.999 0 1 1-1.414-1.414l1-1a.999.999 0 1 1 1.414 1.414Z");
}
</style><g class="cuyn6tgcc"><path class="gzcjrcf9o"/><path class="n7z4b6otw"/></g>`,
		"fallback": "coolicons:cursor-click-bulk-sharp",
	});
}

export default Component;
