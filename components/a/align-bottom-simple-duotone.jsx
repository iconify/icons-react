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
		"content": `<style>.bakffdbbf {
  d: path("M168 40v152a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.p7b6tsbvg {
  d: path("M208 232a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8M80 192V40a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v152a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16m16 0h64V40H96Z");
}
</style><g class="cuyn6tgcc"><path class="bakffdbbf"/><path class="p7b6tsbvg"/></g>`,
		"fallback": "ph:align-bottom-simple-duotone",
	});
}

export default Component;
