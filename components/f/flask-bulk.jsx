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

.fgdsscccy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M10 2h4a1 1 0 0 1 1 1v5.764l4.894 9.789c.181.356.274.75.273 1.149C20.164 20.924 19.265 22 18 22H6c-1.265 0-2.164-1.076-2.167-2.298a2.5 2.5 0 0 1 .273-1.149L9 8.764V3a1 1 0 0 1 1-1");
}

.i2owb1n5a {
  d: path("M8 4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2ZM7 14h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="fgdsscccy"/><path class="i2owb1n5a"/></g>`,
		"fallback": "coolicons:flask-bulk",
	});
}

export default Component;
