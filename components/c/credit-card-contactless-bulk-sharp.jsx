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

.jmcgelb7n {
  d: path("M14.832 7.445a8.2 8.2 0 0 1 1.034 6.911a8.2 8.2 0 0 1-1.034 2.199a1 1 0 0 1-1.664-1.11a6.21 6.21 0 0 0 0-6.89a1 1 0 0 1 1.664-1.11m-2.42 3.234a4.6 4.6 0 0 1-.58 3.876a1 1 0 0 1-1.664-1.11a2.61 2.61 0 0 0 0-2.89a1 1 0 0 1 1.664-1.11c.254.38.449.796.58 1.234M8.01 11a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="bc11tac6h"/><path class="jmcgelb7n"/></g>`,
		"fallback": "coolicons:credit-card-contactless-bulk-sharp",
	});
}

export default Component;
