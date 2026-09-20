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
		"content": `<style>.bcs589bmv {
  d: path("M224 104v48H48v-48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cmzh35bwp {
  d: path("M224 96h-40V56a8 8 0 0 0-8-8H56v-8a8 8 0 0 0-16 0v176a8 8 0 0 0 16 0v-8h88a8 8 0 0 0 8-8v-40h72a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8m-56-32v32H56V64Zm-32 128H56v-32h80Zm80-48H56v-32h160Z");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="bcs589bmv"/><path class="cmzh35bwp"/></g>`,
		"fallback": "ph:chart-bar-horizontal-duotone",
	});
}

export default Component;
