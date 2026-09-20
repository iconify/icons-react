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

.djzh0xbac {
  d: path("M224 124a92 92 0 0 1-92 92H48a8 8 0 0 1-8-8v-84a92 92 0 0 1 92-92a92 92 0 0 1 92 92");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yv8zi835m {
  d: path("M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m0 184H48v-84a84 84 0 1 1 84 84m12-80a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><g class="cuyn6tgcc"><path class="djzh0xbac"/><path class="yv8zi835m"/></g>`,
		"fallback": "ph:chat-teardrop-dots-duotone",
	});
}

export default Component;
