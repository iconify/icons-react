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

.tf82ozbow {
  d: path("M14 6h-4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4h-4a3.98 3.98 0 0 1-2.828-1.172A3.98 3.98 0 0 1 6 16a1 1 0 0 1 2 0a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h4c1.064 0 2.078.418 2.828 1.172A3.98 3.98 0 0 1 18 8a1 1 0 0 1-2 0a2 2 0 0 0-2-2");
}

.vd0-fwbnp {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13 5a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm0 16a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="vd0-fwbnp"/><path class="tf82ozbow"/></g>`,
		"fallback": "coolicons:currency-dollar-bulk-sharp",
	});
}

export default Component;
