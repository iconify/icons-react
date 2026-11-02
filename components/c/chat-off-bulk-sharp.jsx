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

.lk3mfzb5t {
  d: path("M2.293 2.707a.999.999 0 1 1 1.414-1.414l19 19a.999.999 0 1 1-1.414 1.414Z");
}

.mgw-sxbnl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m3 2l16 16H7.414l-3.707 3.707A1 1 0 0 1 2 21V3a1 1 0 0 1 1-1m19 14.757L7.243 2H21a1 1 0 0 1 1 1Z");
}
</style><g class="cuyn6tgcc"><path class="mgw-sxbnl"/><path class="lk3mfzb5t"/></g>`,
		"fallback": "coolicons:chat-off-bulk-sharp",
	});
}

export default Component;
