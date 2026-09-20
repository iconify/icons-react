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

.d01-lsa-n {
  d: path("M168 64L64 168V64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ulebtznia {
  d: path("M197.66 186.34L127.31 116l46.35-46.34A8 8 0 0 0 168 56H64a8 8 0 0 0-8 8v104a8 8 0 0 0 13.66 5.66L116 127.31l70.34 70.35a8 8 0 0 0 11.32-11.32M72 72h76.69l-38.34 38.34L72 148.69Z");
}
</style><g class="cuyn6tgcc"><path class="d01-lsa-n"/><path class="ulebtznia"/></g>`,
		"fallback": "ph:arrow-up-left-duotone",
	});
}

export default Component;
