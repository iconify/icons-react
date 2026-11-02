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
		"content": `<style>.byk-bbetb {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 10H3a1 1 0 0 1-1-1c0-1.023.317-2.01.863-2.871c.565-.89 1.345-1.621 2.218-2.204C7.099 2.581 9.596 2 12 2s4.901.581 6.919 1.925c.873.583 1.653 1.314 2.218 2.204C21.683 6.99 22 7.977 22 9a1 1 0 0 1-1 1m0 6a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1Z");
}

.cb8v9objn {
  d: path("M4 12h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="byk-bbetb"/><path class="cb8v9objn"/></g>`,
		"fallback": "coolicons:burger-bulk-round",
	});
}

export default Component;
