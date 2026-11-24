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

.n3m7kfbeu {
  d: path("M9 13a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm-8 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h6Zm4 3v-2h-2v2Z");
}

.t473xod8i {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="t473xod8i"/><path class="n3m7kfbeu"/></g>`,
		"fallback": "coolicons:building-office-bulk-sharp",
	});
}

export default Component;
