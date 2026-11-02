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

.owln6ubqz {
  d: path("M19.707 8.293A1 1 0 0 1 19 10h-4a3 3 0 0 1-3-3V3a1 1 0 0 1 1.698-.716l.009.008v.001ZM15 8h1.586L14 5.414V7a.997.997 0 0 0 1 1");
}

.vn5g6zbpx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19.707 8.293A1 1 0 0 1 20 9v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6c.265 0 .52.105.707.293ZM13 7a2 2 0 0 0 2 2h3l-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="vn5g6zbpx"/><path class="owln6ubqz"/></g>`,
		"fallback": "coolicons:file-bulk",
	});
}

export default Component;
