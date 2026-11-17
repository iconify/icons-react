import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

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

.efdgh3ppm {
  d: path("M13 18v2h7a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h7v-2H7.778a3 3 0 0 1-3-3V9.352a3 3 0 0 1 1.024-2.258L10.024 3.4a3 3 0 0 1 3.952 0l4.222 3.694a3 3 0 0 1 1.024 2.258V15a3 3 0 0 1-3 3Zm-1-2h4.222a1 1 0 0 0 1-1V9.352c0-.288-.124-.563-.341-.753l-4.222-3.694c-.378-.33-.94-.33-1.318 0L7.119 8.599c-.217.19-.341.465-.341.753V15a1 1 0 0 0 1 1Z");
}

.mh6-vgp0v {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16.222 18H7.778a3 3 0 0 1-3-3V9.352a3 3 0 0 1 1.024-2.258L10.024 3.4a3 3 0 0 1 3.952 0l4.222 3.694a3 3 0 0 1 1.024 2.258V15a3 3 0 0 1-3 3");
}
</style><g class="cuyn6tgcc"><path class="mh6-vgp0v"/><path class="efdgh3ppm"/></g>`,
		"fallback": "coolicons:house-connection-bulk",
	});
}

export default Component;
