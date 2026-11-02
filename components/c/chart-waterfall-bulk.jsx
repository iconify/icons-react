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

.j2439_glk {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 18a1 1 0 0 0 1 1h16a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3V4a1 1 0 0 1 2 0Z");
}

.y4chwetsg {
  d: path("M12 9a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Zm-4 7a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm8-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm4 4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="j2439_glk"/><path class="y4chwetsg"/></g>`,
		"fallback": "coolicons:chart-waterfall-bulk",
	});
}

export default Component;
