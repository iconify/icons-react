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

.rcd9asbdv {
  d: path("M176 32v192a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wst1xbc7b {
  d: path("M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12-56a12 12 0 1 0-12-12a12 12 0 0 0 12 12m0 112a12 12 0 1 0 12 12a12 12 0 0 0-12-12");
}
</style><g class="cuyn6tgcc"><path class="rcd9asbdv"/><path class="wst1xbc7b"/></g>`,
		"fallback": "ph:dots-three-vertical-duotone",
	});
}

export default Component;
