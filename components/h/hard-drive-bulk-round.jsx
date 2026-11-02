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
		"content": `<style>.adof2ob-m {
  d: path("M3 12h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m4 3h.01a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m4 0h.01a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.p4o9dbbhf {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 16v-3c0-.155.036-.308.106-.447l3-6C5.848 5.069 7.307 4 9 4h6c1.693 0 3.152 1.069 3.894 2.553l3 6c.07.139.106.292.106.447v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4m4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><g class="cuyn6tgcc"><path class="p4o9dbbhf"/><path class="adof2ob-m"/></g>`,
		"fallback": "coolicons:hard-drive-bulk-round",
	});
}

export default Component;
