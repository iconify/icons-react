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

.ivdfgfbri {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m5.051 9.684l2-6A1 1 0 0 1 8 3h8a1 1 0 0 1 .949.684l2 6A1.002 1.002 0 0 1 18 11H6a1.002 1.002 0 0 1-.949-1.316");
}

.x8fdx9bhn {
  d: path("M3 11a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2Zm0 6.001V17a4.001 4.001 0 0 1 7.2-2.401a3.01 3.01 0 0 1 3.6 0A4 4 0 1 1 13 17v-.001a1 1 0 0 0-.999-.999H12a1 1 0 0 0-1 .999V17a4 4 0 0 1-8 .001M7.002 15H7a2 2 0 1 0 .002 0M15 17a2 2 0 1 0 3.999.001A2 2 0 0 0 15 17");
}
</style><g class="cuyn6tgcc"><path class="ivdfgfbri"/><path class="x8fdx9bhn"/></g>`,
		"fallback": "coolicons:incognito-bulk-sharp",
	});
}

export default Component;
