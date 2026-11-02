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

.dwxb8orqw {
  d: path("m4.707 1.293l14 14a.999.999 0 1 1-1.414 1.414l-14-14a.999.999 0 1 1 1.414-1.414");
}

.qrdplxb3n {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m5 3l10 10v5a1 1 0 0 1-.553.894l-4 2A1 1 0 0 1 9 20v-7.586L3.293 6.707A1 1 0 0 1 3 6V5a2 2 0 0 1 2-2m4.243 0H19a2 2 0 0 1 2 2v1c0 .265-.105.52-.293.707l-3.879 3.879Z");
}
</style><g class="cuyn6tgcc"><path class="qrdplxb3n"/><path class="dwxb8orqw"/></g>`,
		"fallback": "coolicons:filter-off-bulk",
	});
}

export default Component;
