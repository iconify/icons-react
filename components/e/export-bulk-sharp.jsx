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

.duigrk42a {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13 5.414V15a1 1 0 0 1-2 0V5.414L9.707 6.707a.999.999 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.414 1.414Z");
}

.ycv2ffa9v {
  d: path("M4 8v12h16V8h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2Z");
}
</style><g class="cuyn6tgcc"><path class="duigrk42a"/><path class="ycv2ffa9v"/></g>`,
		"fallback": "coolicons:export-bulk-sharp",
	});
}

export default Component;
