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

.es-tw6bee {
  d: path("M12 13h-2a1 1 0 0 1 0-2h2a.997.997 0 0 0 1-1a1 1 0 0 1 2 0a3 3 0 0 1-3 3m-2.293 3.293a.999.999 0 1 1-1.414 1.414l-6-6a.999.999 0 1 1 1.414-1.414Z");
}

.zlu9u5b0r {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m3.293 11.293l3-3C7.049 7.537 7.896 7 9 7h3c.942 0 1.827.439 2.394 1.191l1.899-1.898a3.121 3.121 0 1 1 4.414 4.414l-5 5C14.992 16.422 14.039 17 13 17H8a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414");
}
</style><g class="cuyn6tgcc"><path class="zlu9u5b0r"/><path class="es-tw6bee"/></g>`,
		"fallback": "coolicons:hand-helping-bulk-sharp",
	});
}

export default Component;
