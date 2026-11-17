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

.zm-js5btt {
  d: path("M10.344 9H13a1 1 0 0 1 0 2H9.118a4.3 4.3 0 0 0 0 2H13a1 1 0 0 1 0 2h-2.656a3.99 3.99 0 0 0 5.056.2a1 1 0 0 1 1.2 1.6A6.02 6.02 0 0 1 7.791 15H7a1 1 0 0 1 0-2h.078a6.5 6.5 0 0 1 0-2H7a1 1 0 0 1 0-2h.791A6.025 6.025 0 0 1 16.6 7.2a1 1 0 0 1-1.2 1.6a3.99 3.99 0 0 0-5.056.2");
}
</style><g class="cuyn6tgcc"><path class="riis51qtn"/><path class="zm-js5btt"/></g>`,
		"fallback": "coolicons:circle-currency-euro-bulk-sharp",
	});
}

export default Component;
