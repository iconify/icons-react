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

.darbm1s7t {
  d: path("M224 48v160H32V48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pf86oacag {
  d: path("M176 72h-24a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h24a56 56 0 0 0 0-112m0 96h-16V88h16a40 40 0 0 1 0 80m-64 8v-40H56v40a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v40h56V80a8 8 0 0 1 16 0v96a8 8 0 0 1-16 0M24 48a8 8 0 0 1 8-8h192a8 8 0 0 1 0 16H32a8 8 0 0 1-8-8m208 160a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="darbm1s7t"/><path class="pf86oacag"/></g>`,
		"fallback": "ph:high-definition-duotone",
	});
}

export default Component;
