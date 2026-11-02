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

.hlbz2lbqc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.832 2.445l6 9a1 1 0 0 1 0 1.11l-6 9a1 1 0 0 1-1.664 0l-6-9a1 1 0 0 1 0-1.11l6-9a1 1 0 0 1 1.664 0");
}

.t0r-1-bvp {
  d: path("m12 13.882l5.553-2.776a1 1 0 1 1 .894 1.788l-6 3a1 1 0 0 1-.894 0l-6-3a1 1 0 1 1 .894-1.788Z");
}
</style><g class="cuyn6tgcc"><path class="hlbz2lbqc"/><path class="t0r-1-bvp"/></g>`,
		"fallback": "coolicons:currency-ethereum-bulk",
	});
}

export default Component;
