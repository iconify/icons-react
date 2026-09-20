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
		"content": `<style>.cjlyp0ble {
  d: path("M208 32a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m-32 40v152a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16m-16 0H96v152h64Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ped31yqbt {
  d: path("M168 72v152a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="ped31yqbt"/><path class="cjlyp0ble"/></g>`,
		"fallback": "ph:align-top-simple-duotone",
	});
}

export default Component;
