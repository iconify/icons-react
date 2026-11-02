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

.q4nqx3z6x {
  d: path("m13.04 9.626l1.334 1.334a.999.999 0 1 1-1.414 1.414l-1.334-1.334a.999.999 0 1 1 1.414-1.414");
}

.svnfsbb5m {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7.707 20.707a3.121 3.121 0 1 1-4.414-4.414L11 8.586V8c0-1.232-.873-2.459-1.707-3.293l-1-1A1 1 0 0 1 9 2h4c1.804 0 3.47 1.056 4.707 2.293l2 2A1 1 0 0 1 20 7v1.586l1.707 1.707a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0L15.586 13h-.172Z");
}
</style><g class="cuyn6tgcc"><path class="svnfsbb5m"/><path class="q4nqx3z6x"/></g>`,
		"fallback": "coolicons:hammer-bulk-sharp",
	});
}

export default Component;
