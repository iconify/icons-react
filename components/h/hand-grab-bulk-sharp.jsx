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

.di23f0b_l {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18 6a3 3 0 0 1 3 3v6a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7v-3a3 3 0 0 1 4-2.829V9a3 3 0 0 1 4.471-2.615a3 3 0 0 1 5.058 0A3 3 0 0 1 17.997 6Z");
}

.sdusgzyyf {
  d: path("M13 12a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm-8 3a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="di23f0b_l"/><path class="sdusgzyyf"/></g>`,
		"fallback": "coolicons:hand-grab-bulk-sharp",
	});
}

export default Component;
