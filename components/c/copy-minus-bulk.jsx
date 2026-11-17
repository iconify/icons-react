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

.ui-5us_5m {
  d: path("M4 9v10a1 1 0 0 0 1 1h10a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3V9a1 1 0 0 1 2 0m7 0h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2");
}

.z5gvel7ot {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="z5gvel7ot"/><path class="ui-5us_5m"/></g>`,
		"fallback": "coolicons:copy-minus-bulk",
	});
}

export default Component;
