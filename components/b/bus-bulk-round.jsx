import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.co47idbtl {
  d: path("M9 5h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2M8 15h.01a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m8 0h.01a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.z28yjrnfn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 7v10c0 1.27-.803 2.405-2 2.829V21a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1h-4v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.171A3 3 0 0 1 4 17V7a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5M6 7v5h12V7a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3");
}
</style><g class="cuyn6tgcc"><path class="z28yjrnfn"/><path class="co47idbtl"/></g>`,
		"fallback": "coolicons:bus-bulk-round",
	});
}

export default Component;
