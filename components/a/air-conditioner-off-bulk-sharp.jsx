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

.dfnh6260u {
  d: path("M7 7h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2");
}

.n6eojxbwe {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="n6eojxbwe"/><path class="dfnh6260u"/></g>`,
		"fallback": "coolicons:air-conditioner-off-bulk-sharp",
	});
}

export default Component;
