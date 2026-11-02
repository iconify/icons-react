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
		"content": `<style>.bc11tac6h {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.d3y_hnbli {
  d: path("M6 12V9a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H8v2a1 1 0 0 1-2 0m12 0v3a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="bc11tac6h"/><path class="d3y_hnbli"/></g>`,
		"fallback": "coolicons:aspect-ratio-bulk-sharp",
	});
}

export default Component;
