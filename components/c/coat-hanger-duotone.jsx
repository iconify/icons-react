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

.v0x406m6t {
  d: path("M241.57 171.2L141.33 96l23.46-17.6A8 8 0 0 0 168 72a40 40 0 1 0-80 0a8 8 0 0 0 16 0a24 24 0 0 1 47.69-3.78l-28.35 21.27l-.28.22L14.43 171.2A16 16 0 0 0 24 200h208a16 16 0 0 0 9.6-28.8ZM232 184H24l104-78z");
}

.xv2ntjbkh {
  d: path("M232 192H24a8 8 0 0 1-4.8-14.4L128 96l108.79 81.6A8 8 0 0 1 232 192");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="xv2ntjbkh"/><path class="v0x406m6t"/></g>`,
		"fallback": "ph:coat-hanger-duotone",
	});
}

export default Component;
