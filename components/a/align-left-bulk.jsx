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

.iz1sfcctr {
  d: path("M5 3v18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0");
}

.nbcl49e3y {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3Zm0 10a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="nbcl49e3y"/><path class="iz1sfcctr"/></g>`,
		"fallback": "coolicons:align-left-bulk",
	});
}

export default Component;
