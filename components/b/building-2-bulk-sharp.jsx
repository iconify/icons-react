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

.f90fbvbic {
  d: path("M13.375 8.219a1 1 0 0 1 1.25 0l5 4A1 1 0 0 1 20 13v6h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h8v-8.4a1 1 0 0 1 .375-.781l1.078-.862l.013-.011ZM13 19h5v-5.519l-4-3.2l-1 .8Z");
}

.pfpqefblu {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="pfpqefblu"/><path class="f90fbvbic"/></g>`,
		"fallback": "coolicons:building-2-bulk-sharp",
	});
}

export default Component;
