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

.dnti89bie {
  d: path("M8.01 8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Zm4 0a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Zm4 0a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2Zm-6 5a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2Zm4 0a1 1 0 0 1 0 2H14a1 1 0 0 1 0-2Z");
}

.nrtej0bcv {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18 4c.265 0 .52.105.707.293A9.483 9.483 0 0 1 12 20.485A9.482 9.482 0 0 1 5.293 4.293A1 1 0 0 1 6 4Z");
}
</style><g class="cuyn6tgcc"><path class="nrtej0bcv"/><path class="dnti89bie"/></g>`,
		"fallback": "coolicons:ev-plug-bulk-sharp",
	});
}

export default Component;
