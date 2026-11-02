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

.i8wtb7bpv {
  d: path("M13 12a.998.998 0 0 1-1.6.8l-4-3a1 1 0 0 1 1.2-1.6L11 10V7a1 1 0 0 1 2 0Z");
}

.riis51qtn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12");
}
</style><g class="cuyn6tgcc"><path class="riis51qtn"/><path class="i8wtb7bpv"/></g>`,
		"fallback": "coolicons:clock-10-bulk-sharp",
	});
}

export default Component;
