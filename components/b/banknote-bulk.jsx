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
		"content": `<style>.avx8xbi3l {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.zkuu4btdm {
  d: path("M9.236 10.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338M7.01 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm4.283 1.707a.999.999 0 1 0 1.414-1.414a.999.999 0 1 0-1.414 1.414M17 11h.01a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="avx8xbi3l"/><path class="zkuu4btdm"/></g>`,
		"fallback": "coolicons:banknote-bulk",
	});
}

export default Component;
