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
		"content": `<style>.aec7lkj0a {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3.196 21.981a1 1 0 0 1-1.177-1.177l.935-4.673A9.946 9.946 0 0 1 19.032 4.968A9.945 9.945 0 0 1 7.869 21.046Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.znrligbuz {
  d: path("M7 16v-3c0-.265.105-.52.293-.707l5-5a.997.997 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 11 17H8a1 1 0 0 1-1-1");
}
</style><g class="cuyn6tgcc"><path class="aec7lkj0a"/><path class="znrligbuz"/></g>`,
		"fallback": "coolicons:chat-circle-edit-bulk-round",
	});
}

export default Component;
