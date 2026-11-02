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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hil31ccpl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 10h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3");
}

.ljv1ika9a {
  d: path("M5 11V3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0V6H7v5a1 1 0 0 1-2 0m3 10v-3a4 4 0 0 1 8 0v3a1 1 0 0 1-2 0v-3a2 2 0 1 0-4 0v3a1 1 0 0 1-2 0");
}
</style><g class="cuyn6tgcc"><path class="hil31ccpl"/><path class="ljv1ika9a"/></g>`,
		"fallback": "coolicons:castle-bulk",
	});
}

export default Component;
