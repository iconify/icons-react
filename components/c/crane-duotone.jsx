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
		"content": `<style>.c48-ycc6q {
  d: path("M228.12 17.14a8 8 0 0 0-7.88-.2L102 80H32a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h88a16 16 0 0 0 16-16v-32a7.8 7.8 0 0 0-.34-2.3L113.54 92L216 37.33V160h-16v-8a8 8 0 0 0-16 0v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V24a8 8 0 0 0-3.88-6.86M98.05 96l19.2 64H64V96ZM48 96v64H32V96ZM32 200v-24h88v24Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.nnu0x1y2t {
  d: path("M128 168H56V88h48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="nnu0x1y2t"/><path class="c48-ycc6q"/></g>`,
		"fallback": "ph:crane-duotone",
	});
}

export default Component;
