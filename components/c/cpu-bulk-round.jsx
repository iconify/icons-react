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

.dhzql506t {
  d: path("M11 6a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0ZM6 9a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm3.236 1.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338M18 9h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2m-6.707 3.707a.999.999 0 1 0 1.414-1.414a.999.999 0 1 0-1.414 1.414M6 13a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm12 0h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2m-7 5v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0m4 0v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0");
}

.ib8ghnj8c {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 10a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 14 19h-4a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="ib8ghnj8c"/><path class="dhzql506t"/></g>`,
		"fallback": "coolicons:cpu-bulk-round",
	});
}

export default Component;
