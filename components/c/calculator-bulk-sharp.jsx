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

.t5ii0tigx {
  d: path("M16 7a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Zm-8 4h.01a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m4 0h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m5 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0m-8.99 3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2ZM12 15h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}

.xg2nkqahl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="xg2nkqahl"/><path class="t5ii0tigx"/></g>`,
		"fallback": "coolicons:calculator-bulk-sharp",
	});
}

export default Component;
