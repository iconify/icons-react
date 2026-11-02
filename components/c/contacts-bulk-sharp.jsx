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
		"content": `<style>.ca-ggxbuz {
  d: path("M8 10a4 4 0 1 1 8 0a4 4 0 0 1-8 0m11-1a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm-9 1a2 2 0 1 0 3.999.001A2 2 0 0 0 10 10m9 7a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2ZM7 21a5 5 0 0 1 10 0a1 1 0 0 1-2 0a3 3 0 1 0-6 0a1 1 0 0 1-2 0");
}

.cuyn6tgcc {
  fill: currentColor;
}

.pwd407ban {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="pwd407ban"/><path class="ca-ggxbuz"/></g>`,
		"fallback": "coolicons:contacts-bulk-sharp",
	});
}

export default Component;
