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

.nvjq80alh {
  d: path("M208 88h-56V32Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qk25g2bni {
  d: path("m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216h-88v-16h8a8 8 0 0 0 0-16h-8v-16h8a8 8 0 0 0 0-16h-8v-16h8a8 8 0 0 0 0-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16H56V40h88v48a8 8 0 0 0 8 8h48z");
}
</style><g class="cuyn6tgcc"><path class="nvjq80alh"/><path class="qk25g2bni"/></g>`,
		"fallback": "ph:file-archive-duotone",
	});
}

export default Component;
