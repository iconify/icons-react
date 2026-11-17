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
		"content": `<style>.c_uqh6evo {
  d: path("M13 7h1a2 2 0 0 1 2 2a1 1 0 0 1-2 0h-3a1 1 0 0 0 0 2h2a3 3 0 1 1 0 6v1a1 1 0 0 1-2 0v-1h-1a2 2 0 0 1-2-2a1 1 0 0 1 2 0h3a1 1 0 0 0 0-2h-2a3 3 0 1 1 0-6V6a1 1 0 0 1 2 0Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.riis51qtn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12");
}
</style><g class="cuyn6tgcc"><path class="riis51qtn"/><path class="c_uqh6evo"/></g>`,
		"fallback": "coolicons:circle-currency-dollar-bulk",
	});
}

export default Component;
