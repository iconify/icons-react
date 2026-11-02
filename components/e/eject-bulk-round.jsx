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

.g7smq1bzv {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m4.672 10.781l4-6a4 4 0 0 1 6.656 0l4 6A4 4 0 0 1 16 17H8a4 4 0 0 1-3.328-6.219");
}

.tm-7tqbxw {
  d: path("M5 19h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="g7smq1bzv"/><path class="tm-7tqbxw"/></g>`,
		"fallback": "coolicons:eject-bulk-round",
	});
}

export default Component;
