import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

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

.lhz09l8zb {
  d: path("M6.732 4.64a1 1 0 0 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z");
}

.ze6dckb4b {
  d: path("M11.732 9.36a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 1 1-1.536-1.28z");
}
</style><g class="cuyn6tgcc"><path class="ze6dckb4b"/><path class="lhz09l8zb"/></g>`,
		"fallback": "pepicons-pop:angle-right",
	});
}

export default Component;
