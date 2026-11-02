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

.la4wfjj-s {
  d: path("M14.01 2a1 1 0 0 1 0 2H14a1 1 0 0 1 0-2Zm-4 1a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2Zm9.747 1.03a1 1 0 0 1 .486 1.94L13 7.781V13a1 1 0 0 1-2 0V8.281L4.243 9.97a1 1 0 0 1-.486-1.94Z");
}

.zec6ttb0z {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 21v-8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m2-5h3v-2H5Zm5 0h4v-2h-4Zm6 0h3v-2h-3Z");
}
</style><g class="cuyn6tgcc"><path class="zec6ttb0z"/><path class="la4wfjj-s"/></g>`,
		"fallback": "coolicons:cable-car-alt-bulk-sharp",
	});
}

export default Component;
