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

.n2kqmccot {
  d: path("M3 8h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m19 7a3 3 0 0 1-3 3h-3.586l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L15.414 16H19a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0Z");
}

.zv0ky1bfi {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 7v2H10v10a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3");
}
</style><g class="cuyn6tgcc"><path class="zv0ky1bfi"/><path class="n2kqmccot"/></g>`,
		"fallback": "coolicons:credit-card-return-corner-bulk",
	});
}

export default Component;
