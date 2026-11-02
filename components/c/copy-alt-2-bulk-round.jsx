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

.f5lh-7rdn {
  d: path("M11 2h6a5 5 0 0 1 5 5v6a3 3 0 0 1-3 3a1 1 0 0 1 0-2a1 1 0 0 0 1-1V7a3 3 0 0 0-3-3h-6a.997.997 0 0 0-1 1a1 1 0 0 1-2 0a3 3 0 0 1 3-3");
}

.r39aklkqn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 13a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="r39aklkqn"/><path class="f5lh-7rdn"/></g>`,
		"fallback": "coolicons:copy-alt-2-bulk-round",
	});
}

export default Component;
