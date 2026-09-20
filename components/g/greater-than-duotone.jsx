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

.oipnty0yy {
  d: path("M224 128a8 8 0 0 1-4.58 7.23l-152 72a8 8 0 1 1-6.85-14.46L197.31 128L60.58 63.23a8 8 0 1 1 6.85-14.46l152 72A8 8 0 0 1 224 128");
}

.rwq9m3nju {
  d: path("M216 128L64 200V56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="rwq9m3nju"/><path class="oipnty0yy"/></g>`,
		"fallback": "ph:greater-than-duotone",
	});
}

export default Component;
