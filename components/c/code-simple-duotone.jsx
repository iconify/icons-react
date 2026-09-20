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

.j67fn3bwu {
  d: path("M93.31 70L28 128l65.27 58a8 8 0 1 1-10.62 12l-72-64a8 8 0 0 1 0-12l72-64a8 8 0 1 1 10.66 12m152 52l-72-64a8 8 0 0 0-10.62 12L228 128l-65.27 58a8 8 0 1 0 10.62 12l72-64a8 8 0 0 0 0-12Z");
}

.sv7kk_bbw {
  d: path("m240 128l-72 64H88l-72-64l72-64h80Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="sv7kk_bbw"/><path class="j67fn3bwu"/></g>`,
		"fallback": "ph:code-simple-duotone",
	});
}

export default Component;
