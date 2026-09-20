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

.ku9cvcb-q {
  d: path("M208 96a80 80 0 1 0-88 79.6V200H88a8 8 0 0 0 0 16h32v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16h-32v-24.4A80.11 80.11 0 0 0 208 96M64 96a64 64 0 1 1 64 64a64.07 64.07 0 0 1-64-64");
}

.z6sapp8iw {
  d: path("M200 96a72 72 0 1 1-72-72a72 72 0 0 1 72 72");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="z6sapp8iw"/><path class="ku9cvcb-q"/></g>`,
		"fallback": "ph:gender-female-duotone",
	});
}

export default Component;
