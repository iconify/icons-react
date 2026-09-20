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

.hr_sb0paa {
  d: path("m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M96.72 152L40 192v-80.47Zm16.37 8h29.82l56.63 40H56.46Zm46.19-8L216 111.53V192ZM128 41.61l81.91 54.61l-67 47.78h-29.8l-67-47.78Z");
}
</style><g class="cuyn6tgcc"><path class="gs-i6-9yy"/><path class="hr_sb0paa"/></g>`,
		"fallback": "ph:envelope-open-duotone",
	});
}

export default Component;
