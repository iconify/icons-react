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

.lz7js1b1l {
  d: path("M200 136a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h128a8 8 0 0 1 8 8m32-56H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-80 96h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16");
}

.pxmvtzbgq {
  d: path("M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="pxmvtzbgq"/><path class="lz7js1b1l"/></g>`,
		"fallback": "ph:funnel-simple-duotone",
	});
}

export default Component;
