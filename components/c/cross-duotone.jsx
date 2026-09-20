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

.ou0sbkn-q {
  d: path("M200 72h-40V32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v40H56a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h40v88a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-88h40a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 48h-48a8 8 0 0 0-8 8v96h-32v-96a8 8 0 0 0-8-8H56V88h48a8 8 0 0 0 8-8V32h32v48a8 8 0 0 0 8 8h48Z");
}

.pqv59_5yz {
  d: path("M208 88v32a8 8 0 0 1-8 8h-48v96a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8v-96H56a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h48V32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v48h48a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="pqv59_5yz"/><path class="ou0sbkn-q"/></g>`,
		"fallback": "ph:cross-duotone",
	});
}

export default Component;
