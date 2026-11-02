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

.hbejupbwc {
  d: path("M6 8v3h12V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1H6v3a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0");
}

.panz28b2u {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m14 0a3 3 0 1 1 6 0a3 3 0 0 1-6 0M2 18a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}
</style><g class="cuyn6tgcc"><path class="panz28b2u"/><path class="hbejupbwc"/></g>`,
		"fallback": "coolicons:git-branch-bulk-sharp",
	});
}

export default Component;
