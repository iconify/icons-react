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

.czj_9obnd {
  d: path("M6.293 11.293a2.414 2.414 0 0 1 3.414 0l2 2a.414.414 0 0 0 .586 0l8-8a.999.999 0 1 1 1.414 1.414l-8 8a2.414 2.414 0 0 1-3.414 0l-2-2a.414.414 0 0 0-.586 0l-4 4a.999.999 0 1 1-1.414-1.414Z");
}

.j2439_glk {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 18a1 1 0 0 0 1 1h16a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3V4a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="j2439_glk"/><path class="czj_9obnd"/></g>`,
		"fallback": "coolicons:chart-line-bulk",
	});
}

export default Component;
