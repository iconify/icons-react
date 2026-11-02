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

.i9bos9okc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m6.293 20.707l-1-1a5.243 5.243 0 0 1 0-7.414l6-6a5.243 5.243 0 0 1 7.414 7.414l-7 7A1 1 0 0 1 11 21H7a1 1 0 0 1-.707-.293");
}

.me-xsyi0z {
  d: path("m9.707 9.293l6 6a.999.999 0 1 1-1.414 1.414l-6-6a.999.999 0 1 1 1.414-1.414M11 19h10a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="i9bos9okc"/><path class="me-xsyi0z"/></g>`,
		"fallback": "coolicons:eraser-bulk-round",
	});
}

export default Component;
