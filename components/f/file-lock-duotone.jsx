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

.hjl1ssh0z {
  d: path("M48 184h72v40H48ZM152 32v56h56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jk1j45bez {
  d: path("M120 176h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-48-4a12 12 0 0 1 24 0v4H72Zm40 44H56v-24h56ZM213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-40a8 8 0 0 0 0 16h40a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Z");
}
</style><g class="cuyn6tgcc"><path class="hjl1ssh0z"/><path class="jk1j45bez"/></g>`,
		"fallback": "ph:file-lock-duotone",
	});
}

export default Component;
