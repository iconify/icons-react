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

.h0osytbrb {
  d: path("M232 96v64a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h152a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z_cuximwz {
  d: path("M40 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m200 40v64a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h152a16 16 0 0 1 16 16m-16 64V96H72v64z");
}
</style><g class="cuyn6tgcc"><path class="h0osytbrb"/><path class="z_cuximwz"/></g>`,
		"fallback": "ph:align-left-simple-duotone",
	});
}

export default Component;
