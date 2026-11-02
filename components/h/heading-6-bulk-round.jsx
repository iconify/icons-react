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

.g5xb99jis {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M14 12a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2h-2a2 2 0 0 0-2 2v.535A4.002 4.002 0 0 1 21.464 18A4 4 0 0 1 14 16Zm2 4a2 2 0 1 0 3.999.001A2 2 0 0 0 16 16");
}

.y4tx-xbdi {
  d: path("M4 11h6V5a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0v-6H4v6a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="g5xb99jis"/><path class="y4tx-xbdi"/></g>`,
		"fallback": "coolicons:heading-6-bulk-round",
	});
}

export default Component;
