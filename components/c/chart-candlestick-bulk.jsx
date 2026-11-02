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

.fr4ra8b7i {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2ZM2 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm14 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z");
}

.te_1idb1x {
  d: path("M11 5V3a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0M4 15v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0m7 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0m7 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0m0 6v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0M4 20a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0Z");
}
</style><g class="cuyn6tgcc"><path class="fr4ra8b7i"/><path class="te_1idb1x"/></g>`,
		"fallback": "coolicons:chart-candlestick-bulk",
	});
}

export default Component;
