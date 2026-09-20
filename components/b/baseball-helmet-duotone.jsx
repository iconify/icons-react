import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

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

.gvwuazfrm {
  d: path("M88 128a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m160-48h-24.3A104 104 0 0 0 16 128v24a72.08 72.08 0 0 0 72 72h40a72.08 72.08 0 0 0 72-72v-16h48a8 8 0 0 0 0-16m-64 32a56.06 56.06 0 0 1-50.46 55.72A71.87 71.87 0 0 0 160 152v-16h24Zm-32-32a8 8 0 0 0-8 8v24a56 56 0 0 1-112 0v-24a88 88 0 0 1 175.64-8Z");
}

.ob_lj1mmo {
  d: path("M88 176a20 20 0 1 1 20-20a20 20 0 0 1-20 20m64-48v24a64 64 0 0 1-64 64h40a64 64 0 0 0 64-64v-24Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="ob_lj1mmo"/><path class="gvwuazfrm"/></g>`,
		"fallback": "ph:baseball-helmet-duotone",
	});
}

export default Component;
