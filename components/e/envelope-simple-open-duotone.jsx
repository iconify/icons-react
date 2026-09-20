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

.gs-i6-9yy {
  d: path("m224 96l-78.55 56h-34.9L32 96l96-64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v6g7w9acv {
  d: path("m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M128 41.61l81.91 54.61l-67 47.78h-29.8l-67-47.78ZM40 200v-88.47l65.9 47a8 8 0 0 0 4.65 1.49h34.9a8 8 0 0 0 4.65-1.49l65.9-47V200Z");
}
</style><g class="cuyn6tgcc"><path class="gs-i6-9yy"/><path class="v6g7w9acv"/></g>`,
		"fallback": "ph:envelope-simple-open-duotone",
	});
}

export default Component;
