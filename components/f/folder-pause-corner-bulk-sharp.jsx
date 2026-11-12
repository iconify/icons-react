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

.sob878tac {
  d: path("M16 21a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0Z");
}

.ziwln3kxj {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 3h7c.265 0 .52.105.707.293L12.414 5H21a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="ziwln3kxj"/><path class="sob878tac"/></g>`,
		"fallback": "coolicons:folder-pause-corner-bulk-sharp",
	});
}

export default Component;
