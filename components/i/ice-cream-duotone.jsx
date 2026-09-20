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

.pe4tfab0m {
  d: path("M208 97.37V96a80 80 0 0 0-160 0v1.37A24 24 0 0 0 56 144h3.29l54.82 95.94a16 16 0 0 0 27.78 0L196.71 144H200a24 24 0 0 0 8-46.63M77.71 144h19.36l40.61 71.06L128 232Zm57.08 0l21.75 38.06l-9.65 16.88L115.5 144Zm31 21.94L153.21 144h25.08ZM200 128H56a8 8 0 0 1 0-16a8 8 0 0 0 8-8v-8a64 64 0 0 1 128 0v8a8 8 0 0 0 8 8a8 8 0 0 1 0 16");
}

.rc97xqumw {
  d: path("M216 120a16 16 0 0 1-16 16H56a16 16 0 0 1 0-32v-8a72 72 0 0 1 144 0v8a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="rc97xqumw"/><path class="pe4tfab0m"/></g>`,
		"fallback": "ph:ice-cream-duotone",
	});
}

export default Component;
