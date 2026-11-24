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

.fx-lrfu5s {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Z");
}

.o0gaoslpo {
  d: path("M12.01 6a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2ZM4 10v10h16v-6h-5a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2Zm8.01 0a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Zm-6 2a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm6 2a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Zm-6 2a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm12 0a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="fx-lrfu5s"/><path class="o0gaoslpo"/></g>`,
		"fallback": "coolicons:city-bulk-sharp",
	});
}

export default Component;
