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
		"content": `<style>.awo3odbam {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M10.707 3.293L12.414 5H19a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5c.265 0 .52.105.707.293");
}

.cuyn6tgcc {
  fill: currentColor;
}

.y1innc7rh {
  d: path("M15 10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="awo3odbam"/><path class="y1innc7rh"/></g>`,
		"fallback": "coolicons:folder-text-bulk",
	});
}

export default Component;
