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

.riis51qtn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12");
}

.ur1jlqb0g {
  d: path("M11 10v1h2a1 1 0 0 1 0 2h-2v2h5a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h1v-2H8a1 1 0 0 1 0-2h1v-1a4 4 0 0 1 8 0a1 1 0 0 1-2 0a2 2 0 0 0-3.843-.778A2 2 0 0 0 11 10");
}
</style><g class="cuyn6tgcc"><path class="riis51qtn"/><path class="ur1jlqb0g"/></g>`,
		"fallback": "coolicons:circle-currency-pound-bulk-sharp",
	});
}

export default Component;
