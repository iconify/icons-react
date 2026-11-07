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

.kzv6-rbrr {
  d: path("M13 10a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Zm-.99 2a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Z");
}

.okjsc7yvd {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 18H8c-.468 0-.98.395-1.293.707l-2 2a1.36 1.36 0 0 1-1.186.382C2.572 20.928 2 19.898 2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3");
}
</style><g class="cuyn6tgcc"><path class="okjsc7yvd"/><path class="kzv6-rbrr"/></g>`,
		"fallback": "coolicons:chat-warning-bulk",
	});
}

export default Component;
