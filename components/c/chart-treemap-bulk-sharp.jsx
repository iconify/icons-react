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

.md1d0fb5h {
  d: path("M11 9h10a1 1 0 0 1 0 2h-4v10a1 1 0 0 1-2 0V11h-4v10a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Z");
}

.td1bzxb2d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="td1bzxb2d"/><path class="md1d0fb5h"/></g>`,
		"fallback": "coolicons:chart-treemap-bulk-sharp",
	});
}

export default Component;
