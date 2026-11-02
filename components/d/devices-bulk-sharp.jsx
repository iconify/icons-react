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

.nx4jfabcs {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M14 10a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z");
}

.z98xsglcg {
  d: path("M16 5H4v10h7a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0Z");
}
</style><g class="cuyn6tgcc"><path class="nx4jfabcs"/><path class="z98xsglcg"/></g>`,
		"fallback": "coolicons:devices-bulk-sharp",
	});
}

export default Component;
