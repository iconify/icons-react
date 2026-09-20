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

.mbjspabxc {
  d: path("M201.54 110.46a104 104 0 0 0-145.4-1.63L29.66 82.34A8 8 0 0 0 16 88v64a8 8 0 0 0 8 8h64a8 8 0 0 0 5.66-13.66l-26.19-26.18A88 88 0 0 1 216 184a8 8 0 0 0 16 0a103.33 103.33 0 0 0-30.46-73.54M32 144v-36.69L68.69 144Z");
}

.r5nne3zxx {
  d: path("M88 152H24V88Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="r5nne3zxx"/><path class="mbjspabxc"/></g>`,
		"fallback": "ph:arrow-arc-left-duotone",
	});
}

export default Component;
