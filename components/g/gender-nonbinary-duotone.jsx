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

.d2iqf0bkm {
  d: path("M192 168a64 64 0 1 1-64-64a64 64 0 0 1 64 64");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wirltez2f {
  d: path("M136 96.46V62.13l27.88 16.73a8 8 0 1 0 8.24-13.72L143.55 48l28.57-17.14a8 8 0 0 0-8.24-13.72L128 38.67L92.12 17.14a8 8 0 0 0-8.24 13.72L112.45 48L83.88 65.14a8 8 0 0 0 8.24 13.72L120 62.13v34.33a72 72 0 1 0 16 0M128 224a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56");
}
</style><g class="cuyn6tgcc"><path class="d2iqf0bkm"/><path class="wirltez2f"/></g>`,
		"fallback": "ph:gender-nonbinary-duotone",
	});
}

export default Component;
