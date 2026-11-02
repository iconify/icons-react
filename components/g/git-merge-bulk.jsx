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

.mihs-n4ak {
  d: path("M4 16V8a1 1 0 0 1 2 0a3 3 0 0 0 3 3h8a1 1 0 0 1 0 2H9a4.97 4.97 0 0 1-3-.999V16a1 1 0 0 1-2 0");
}

.qt8n4vwmc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m14 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0M2 18a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}
</style><g class="cuyn6tgcc"><path class="qt8n4vwmc"/><path class="mihs-n4ak"/></g>`,
		"fallback": "coolicons:git-merge-bulk",
	});
}

export default Component;
