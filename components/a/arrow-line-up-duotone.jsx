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

.of4t0eboe {
  d: path("M133.66 66.34a8 8 0 0 0-11.32 0l-72 72A8 8 0 0 0 56 152h64v72a8 8 0 0 0 16 0v-72h64a8 8 0 0 0 5.66-13.66ZM75.31 136L128 83.31L180.69 136ZM224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8");
}

.t5a7r3pol {
  d: path("M200 144H56l72-72Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="t5a7r3pol"/><path class="of4t0eboe"/></g>`,
		"fallback": "ph:arrow-line-up-duotone",
	});
}

export default Component;
