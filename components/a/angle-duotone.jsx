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

.fdb8l9f9h {
  d: path("M96 72a8 8 0 0 1 8-8a104.11 104.11 0 0 1 104 104a8 8 0 0 1-16 0a88.1 88.1 0 0 0-88-88a8 8 0 0 1-8-8m144 120H80V32a8 8 0 0 0-16 0v32H32a8 8 0 0 0 0 16h32v120a8 8 0 0 0 8 8h168a8 8 0 0 0 0-16");
}

.zrqaro57s {
  d: path("M200 168v32H72V72h32a96 96 0 0 1 96 96");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="zrqaro57s"/><path class="fdb8l9f9h"/></g>`,
		"fallback": "ph:angle-duotone",
	});
}

export default Component;
