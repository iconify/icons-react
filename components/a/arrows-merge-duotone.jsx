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

.k-ialpbmb {
  d: path("M192 40v64a8 8 0 0 1-2.34 5.66L136 163.31v49.38l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 212.69v-49.38l-53.66-53.65A8 8 0 0 1 64 104V40a8 8 0 0 1 16 0v60.69l48 48l48-48V40a8 8 0 0 1 16 0");
}

.oqemgph0l {
  d: path("M184 40v64l-56 56l-56-56V40Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="oqemgph0l"/><path class="k-ialpbmb"/></g>`,
		"fallback": "ph:arrows-merge-duotone",
	});
}

export default Component;
