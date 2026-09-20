import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

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

.d3awdabtr {
  d: path("M232 56v144h-72a32 32 0 0 0-32 32a32 32 0 0 0-32-32H24V56h72a32 32 0 0 1 32 32a32 32 0 0 1 32-32Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.itid1cpnn {
  d: path("M232 48h-72a40 40 0 0 0-32 16a40 40 0 0 0-32-16H24a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h72a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8M96 192H32V64h64a24 24 0 0 1 24 24v112a39.8 39.8 0 0 0-24-8m128 0h-64a39.8 39.8 0 0 0-24 8V88a24 24 0 0 1 24-24h64Z");
}
</style><g class="cuyn6tgcc"><path class="d3awdabtr"/><path class="itid1cpnn"/></g>`,
		"fallback": "ph:book-open-duotone",
	});
}

export default Component;
