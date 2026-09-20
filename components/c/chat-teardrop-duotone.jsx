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
		"content": `<style>.bcscanmhd {
  d: path("M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m0 184H48v-84a84 84 0 1 1 84 84");
}

.cuyn6tgcc {
  fill: currentColor;
}

.djzh0xbac {
  d: path("M224 124a92 92 0 0 1-92 92H48a8 8 0 0 1-8-8v-84a92 92 0 0 1 92-92a92 92 0 0 1 92 92");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="djzh0xbac"/><path class="bcscanmhd"/></g>`,
		"fallback": "ph:chat-teardrop-duotone",
	});
}

export default Component;
