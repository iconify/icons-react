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

.o1afv9bfo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 2h8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a.997.997 0 0 0-1 1v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3");
}

.swxkj5bah {
  d: path("M22 11v2a1 1 0 0 1-2 0v-2a1 1 0 0 0-1-1a1 1 0 0 1 0-2c.799 0 1.558.311 2.121.879A2.97 2.97 0 0 1 22 11m-3 11h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v2a3.004 3.004 0 0 1-3 3m-8-2h2a1 1 0 0 1 0 2h-2a2.97 2.97 0 0 1-2.121-.879A2.97 2.97 0 0 1 8 19a1 1 0 0 1 2 0a1 1 0 0 0 1 1");
}
</style><g class="cuyn6tgcc"><path class="o1afv9bfo"/><path class="swxkj5bah"/></g>`,
		"fallback": "coolicons:boolean-subtract-bulk-round",
	});
}

export default Component;
