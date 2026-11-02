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

.kqa2l-bsc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 8a1.002 1.002 0 0 1 .707 1.707l-2.483 2.484A4 4 0 0 1 18 20h-3a1 1 0 0 1 0-2h3a2 2 0 1 0 0-4h-1a1.002 1.002 0 0 1-.707-1.707L18.586 10H15a1 1 0 0 1 0-2Z");
}

.y4tx-xbdi {
  d: path("M4 11h6V5a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0v-6H4v6a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="kqa2l-bsc"/><path class="y4tx-xbdi"/></g>`,
		"fallback": "coolicons:heading-3-bulk-round",
	});
}

export default Component;
