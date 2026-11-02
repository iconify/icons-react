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

.e8zw_nbzb {
  d: path("M10 9v9h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h2V9a5 5 0 0 1 10 0a1 1 0 0 1-2 0a3 3 0 1 0-6 0");
}

.pgf4y2vjv {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 13h4a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="pgf4y2vjv"/><path class="e8zw_nbzb"/></g>`,
		"fallback": "coolicons:currency-pound-bulk",
	});
}

export default Component;
