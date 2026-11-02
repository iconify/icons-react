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

.hbelxubrg {
  d: path("M4 8h13a5 5 0 0 1 5 5v6a1 1 0 0 1-2 0v-6a3 3 0 0 0-3-3H8v6a1 1 0 0 1-2 0v-6H4v9a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Z");
}

.jpi4zcg-k {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 8a5 5 0 0 1 5 5v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z");
}
</style><g class="cuyn6tgcc"><path class="jpi4zcg-k"/><path class="hbelxubrg"/></g>`,
		"fallback": "coolicons:bed-bulk-round",
	});
}

export default Component;
