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

.gj4xuecta {
  d: path("M80 120v96l-48-48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x3icy5bhc {
  d: path("M168 48H80a8 8 0 0 0 0 16h88a48 48 0 0 1 0 96H88v-40a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 88 216v-40h80a64 64 0 0 0 0-128M72 196.69L43.31 168L72 139.31Z");
}
</style><g class="cuyn6tgcc"><path class="gj4xuecta"/><path class="x3icy5bhc"/></g>`,
		"fallback": "ph:arrow-u-down-left-duotone",
	});
}

export default Component;
