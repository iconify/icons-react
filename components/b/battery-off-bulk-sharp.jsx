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

.okdait3_e {
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414l-20-20a.999.999 0 1 1 1.414-1.414M22 10v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0");
}

.s2h6xmb8a {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m6 6l12 12H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm13 8.757L10.243 6H18a1 1 0 0 1 1 1Z");
}
</style><g class="cuyn6tgcc"><path class="s2h6xmb8a"/><path class="okdait3_e"/></g>`,
		"fallback": "coolicons:battery-off-bulk-sharp",
	});
}

export default Component;
