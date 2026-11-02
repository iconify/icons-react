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

.jbrpz0b3y {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-6 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m8 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 15 15");
}

.mi2ld3b2h {
  d: path("M4 19h17a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="jbrpz0b3y"/><path class="mi2ld3b2h"/></g>`,
		"fallback": "coolicons:chart-bubble-bulk-sharp",
	});
}

export default Component;
