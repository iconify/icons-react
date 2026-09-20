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

.khmmaj2bz {
  d: path("M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 112h-8a32 32 0 0 1 0-64h8ZM32 96h8a32 32 0 0 1 0 64h-8Zm0 80h8a48 48 0 0 0 0-96h-8V64h88v128H32Zm192 16h-88V64h88v16h-8a48 48 0 0 0 0 96h8z");
}

.oef7tzbvy {
  d: path("M232 88v80h-16a40 40 0 0 1 0-80ZM40 88H24v80h16a40 40 0 0 0 0-80");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="oef7tzbvy"/><path class="khmmaj2bz"/></g>`,
		"fallback": "ph:court-basketball-duotone",
	});
}

export default Component;
