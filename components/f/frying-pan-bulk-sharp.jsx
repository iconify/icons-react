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

.hy-_s9som {
  d: path("m14.553 10.106l6-3a1 1 0 1 1 .894 1.788l-6 3a1 1 0 1 1-.894-1.788");
}

.sfwc6oboi {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 10h12a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="sfwc6oboi"/><path class="hy-_s9som"/></g>`,
		"fallback": "coolicons:frying-pan-bulk-sharp",
	});
}

export default Component;
