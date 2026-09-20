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

.nhzs2m1kk {
  d: path("M232 88v64h-64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o3fn5qbsn {
  d: path("M235.06 80.61a8 8 0 0 0-8.72 1.73l-26.48 26.49A104 104 0 0 0 24 184a8 8 0 0 0 16 0a88 88 0 0 1 148.53-63.84l-26.19 26.18A8 8 0 0 0 168 160h64a8 8 0 0 0 8-8V88a8 8 0 0 0-4.94-7.39M224 144h-36.69L224 107.31Z");
}
</style><g class="cuyn6tgcc"><path class="nhzs2m1kk"/><path class="o3fn5qbsn"/></g>`,
		"fallback": "ph:arrow-arc-right-duotone",
	});
}

export default Component;
