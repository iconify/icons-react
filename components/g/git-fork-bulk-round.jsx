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

.l5q2_7b2j {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m14 0a3 3 0 1 1 6 0a3 3 0 0 1-6 0M9 18a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}

.q4525ccds {
  d: path("M9 11h6a3 3 0 0 0 3-3a1 1 0 0 1 2 0a5 5 0 0 1-1.464 3.536A4.98 4.98 0 0 1 15 13h-2v3a1 1 0 0 1-2 0v-3H9a4.98 4.98 0 0 1-3.536-1.464A5 5 0 0 1 4 8a1 1 0 0 1 2 0a3 3 0 0 0 3 3");
}
</style><g class="cuyn6tgcc"><path class="l5q2_7b2j"/><path class="q4525ccds"/></g>`,
		"fallback": "coolicons:git-fork-bulk-round",
	});
}

export default Component;
