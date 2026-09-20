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

.ichl0c_jx {
  d: path("M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ppc1_sdxh {
  d: path("M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16");
}
</style><g class="cuyn6tgcc"><path class="ichl0c_jx"/><path class="ppc1_sdxh"/></g>`,
		"fallback": "ph:battery-vertical-full-duotone",
	});
}

export default Component;
