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

.hocvxubud {
  d: path("M176 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oqyw3hbgk {
  d: path("M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><g class="cuyn6tgcc"><path class="hocvxubud"/><path class="oqyw3hbgk"/></g>`,
		"fallback": "ph:dot-duotone",
	});
}

export default Component;
