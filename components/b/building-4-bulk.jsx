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

.i3ydaxzis {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 21a1 1 0 0 1-1-1V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v14a1 1 0 0 1-1 1ZM9 9h2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m0 4h2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2");
}

.ixweilsso {
  d: path("M9 7h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m11 4v8h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h15v-8c0-.268-.108-.525-.299-.713A.96.96 0 0 0 17 10h-2a1 1 0 0 1 0-2h2a3 3 0 0 1 3 3M9 11h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="i3ydaxzis"/><path class="ixweilsso"/></g>`,
		"fallback": "coolicons:building-4-bulk",
	});
}

export default Component;
