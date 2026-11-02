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

.nfqcfp0_n {
  d: path("M18 8a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Z");
}

.z7rz60bgm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 3h12a1 1 0 0 1 1 1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1 1h-3v4h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1v-4H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="z7rz60bgm"/><path class="nfqcfp0_n"/></g>`,
		"fallback": "coolicons:drill-bulk-sharp",
	});
}

export default Component;
