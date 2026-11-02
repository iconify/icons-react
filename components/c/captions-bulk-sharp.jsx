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

.o01mbnbec {
  d: path("M7 9h4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m8 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2m-6 4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm8 0a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="bc11tac6h"/><path class="o01mbnbec"/></g>`,
		"fallback": "coolicons:captions-bulk-sharp",
	});
}

export default Component;
