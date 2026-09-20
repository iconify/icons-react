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

.swup7ib0h {
  d: path("M176 48v160h-16a32 32 0 0 1-32-32a32 32 0 0 1-32 32H80V48h16a32 32 0 0 1 32 32a32 32 0 0 1 32-32Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t64cxqero {
  d: path("M184 208a8 8 0 0 1-8 8h-16a40 40 0 0 1-32-16a40 40 0 0 1-32 16H80a8 8 0 0 1 0-16h16a24 24 0 0 0 24-24v-40h-16a8 8 0 0 1 0-16h16V80a24 24 0 0 0-24-24H80a8 8 0 0 1 0-16h16a40 40 0 0 1 32 16a40 40 0 0 1 32-16h16a8 8 0 0 1 0 16h-16a24 24 0 0 0-24 24v40h16a8 8 0 0 1 0 16h-16v40a24 24 0 0 0 24 24h16a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="swup7ib0h"/><path class="t64cxqero"/></g>`,
		"fallback": "ph:cursor-text-duotone",
	});
}

export default Component;
