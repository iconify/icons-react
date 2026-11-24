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

.j90vb6xsh {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 9v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22H9a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5");
}

.jt5_8tars {
  d: path("M11 2h2a3 3 0 1 1 0 6h-2a3 3 0 1 1 0-6m2.708 13.293l1.999 2a.999.999 0 1 1-1.414 1.414l-2-1.999a3 3 0 1 1 1.415-1.415M10 14a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><g class="cuyn6tgcc"><path class="j90vb6xsh"/><path class="jt5_8tars"/></g>`,
		"fallback": "coolicons:clipboard-search-bulk-round",
	});
}

export default Component;
