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

.i6ba0ccym {
  d: path("M248 208h-8v-80a16 16 0 0 0-16-16h-56V48a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v160h-8a8 8 0 0 0 0 16h216a8 8 0 0 0 0-16m-24-80v80h-56v-80ZM56 48h96v160h-16v-48a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v48H56Zm64 160H88v-40h32ZM72 96a8 8 0 0 1 8-8h16V72a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16H80a8 8 0 0 1-8-8");
}

.wz0skn93x {
  d: path("M160 48v168h-32v-56H80v56H48V48a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="wz0skn93x"/><path class="i6ba0ccym"/></g>`,
		"fallback": "ph:hospital-duotone",
	});
}

export default Component;
