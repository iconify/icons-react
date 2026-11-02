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

.mwbe2mb7v {
  d: path("M9 9h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}

.thvzeee2o {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1.555.832L12 17.202l-5.445 3.63A1 1 0 0 1 5 20V4a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="thvzeee2o"/><path class="mwbe2mb7v"/></g>`,
		"fallback": "coolicons:bookmark-minus-bulk-sharp",
	});
}

export default Component;
