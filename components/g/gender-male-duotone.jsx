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

.n7uv2dbhs {
  d: path("M216 32h-48a8 8 0 0 0 0 16h28.69l-42.07 42.07a80 80 0 1 0 11.31 11.31L208 59.32V88a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8m-66.76 165.29a64 64 0 1 1 0-90.53a64.1 64.1 0 0 1 0 90.53");
}

.s22qp1_fm {
  d: path("M154.91 202.91a72 72 0 1 1 0-101.82a72 72 0 0 1 0 101.82");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="s22qp1_fm"/><path class="n7uv2dbhs"/></g>`,
		"fallback": "ph:gender-male-duotone",
	});
}

export default Component;
