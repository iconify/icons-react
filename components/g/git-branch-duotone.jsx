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

.cxendib2n {
  d: path("M224 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o2ky_sbyu {
  d: path("M232 64a32 32 0 1 0-40 31v17a8 8 0 0 1-8 8H96a23.8 23.8 0 0 0-8 1.38V95a32 32 0 1 0-16 0v66a32 32 0 1 0 16 0v-17a8 8 0 0 1 8-8h88a24 24 0 0 0 24-24V95a32.06 32.06 0 0 0 24-31M64 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16M200 80a16 16 0 1 1 16-16a16 16 0 0 1-16 16");
}
</style><g class="cuyn6tgcc"><path class="cxendib2n"/><path class="o2ky_sbyu"/></g>`,
		"fallback": "ph:git-branch-duotone",
	});
}

export default Component;
