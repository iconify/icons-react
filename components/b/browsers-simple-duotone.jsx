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

.hlx6p17jw {
  d: path("M192 88v112a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yy6epcc1l {
  d: path("M184 72H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 128H40V88h144zm48-144v120a8 8 0 0 1-16 0V56H64a8 8 0 0 1 0-16h152a16 16 0 0 1 16 16");
}
</style><g class="cuyn6tgcc"><path class="hlx6p17jw"/><path class="yy6epcc1l"/></g>`,
		"fallback": "ph:browsers-simple-duotone",
	});
}

export default Component;
