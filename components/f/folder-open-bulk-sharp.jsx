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

.fv7q5rbix {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 3h7c.265 0 .52.105.707.293L12.414 5H19a1 1 0 0 1 1 1v4h1a1.002 1.002 0 0 1 .949 1.316l-3 9A1 1 0 0 1 18 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1");
}

.k3-b93viz {
  d: path("m4.051 19.684l3-9A1 1 0 0 1 8 10h13a1.002 1.002 0 0 1 .949 1.316l-3 9A1 1 0 0 1 18 21H5a1.002 1.002 0 0 1-.949-1.316M8.721 12l-2.334 7h10.892l2.334-7Z");
}
</style><g class="cuyn6tgcc"><path class="fv7q5rbix"/><path class="k3-b93viz"/></g>`,
		"fallback": "coolicons:folder-open-bulk-sharp",
	});
}

export default Component;
