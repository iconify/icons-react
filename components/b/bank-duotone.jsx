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
		"content": `<style>.appw4obwm {
  d: path("M24 104h24v64H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16h-16v-64h24a8 8 0 0 0 4.19-14.81l-104-64a8 8 0 0 0-8.38 0l-104 64A8 8 0 0 0 24 104m40 0h32v64H64Zm80 0v64h-32v-64Zm48 64h-32v-64h32ZM128 41.39L203.74 88H52.26ZM248 208a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h224a8 8 0 0 1 8 8");
}

.cuyn6tgcc {
  fill: currentColor;
}

.gkf_x7s_w {
  d: path("M232 96H24l104-64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="gkf_x7s_w"/><path class="appw4obwm"/></g>`,
		"fallback": "ph:bank-duotone",
	});
}

export default Component;
