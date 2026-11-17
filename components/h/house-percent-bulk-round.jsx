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

.oohyn742v {
  d: path("M10.707 16.707a.999.999 0 1 1-1.414-1.414l4-4a.999.999 0 1 1 1.414 1.414ZM10.01 11a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2Zm4 4a1 1 0 0 1 0 2H14a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="o3cwdvb-i"/><path class="oohyn742v"/></g>`,
		"fallback": "coolicons:house-percent-bulk-round",
	});
}

export default Component;
