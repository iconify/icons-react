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

.o3cwdvb-i {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 22H8a5 5 0 0 1-5-5v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22");
}

.oym9dfbbg {
  d: path("M13 13h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="o3cwdvb-i"/><path class="oym9dfbbg"/></g>`,
		"fallback": "coolicons:house-plus-bulk-round",
	});
}

export default Component;
