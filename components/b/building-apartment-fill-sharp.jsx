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
		"content": `<style>.eb19gl_lz {
  fill: currentColor;
  d: path("M6 10V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-6v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H3a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1Zm4.01-3H10a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m4 0H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M10 11a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm4.01 0H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M6 12H4v8h2Zm12 8h2v-8h-2Zm-5 2h-2v-4h2Z");
}
</style><path class="eb19gl_lz"/>`,
		"fallback": "coolicons:building-apartment-fill-sharp",
	});
}

export default Component;
