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

.cz9c5iukr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 10h-6a3 3 0 0 0-3 3v8a1 1 0 0 1-1 1a5 5 0 0 1-3.536-1.464A4.98 4.98 0 0 1 4 17V9a5 5 0 0 1 5-5h6c1.33 0 2.597.522 3.536 1.464A5 5 0 0 1 20 9a1 1 0 0 1-1 1");
}

.izwr22bny {
  d: path("M11 2h2a3 3 0 1 1 0 6h-2a3 3 0 1 1 0-6m2 13h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="cz9c5iukr"/><path class="izwr22bny"/></g>`,
		"fallback": "coolicons:clipboard-minus-corner-bulk-round",
	});
}

export default Component;
