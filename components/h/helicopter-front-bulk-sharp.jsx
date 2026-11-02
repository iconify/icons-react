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

.ezls-zn4j {
  d: path("M3 2h18a1 1 0 0 1 0 2h-8v3a1 1 0 0 1-2 0V4H3a1 1 0 0 1 0-2m4 18v-3a1 1 0 0 1 2 0v3h1a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm8 0v-3a1 1 0 0 1 2 0v3h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Z");
}

.oaik1acqc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 13v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4a7 7 0 1 1 14 0m-3.316-3.381l-.004-.005a5 5 0 0 0-.226-.229l-.003-.003A5 5 0 0 0 7.101 12h9.798a4.97 4.97 0 0 0-1.215-2.381");
}
</style><g class="cuyn6tgcc"><path class="oaik1acqc"/><path class="ezls-zn4j"/></g>`,
		"fallback": "coolicons:helicopter-front-bulk-sharp",
	});
}

export default Component;
