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

.lygomtrpe {
  d: path("M86.75 44.3L33.48 128l53.27 83.7a8 8 0 0 1-2.46 11.05A7.9 7.9 0 0 1 80 224a8 8 0 0 1-6.76-3.71l-56-88a8 8 0 0 1 0-8.59l56-88a8 8 0 1 1 13.5 8.59Zm152 79.41l-56-88a8 8 0 1 0-13.5 8.59l53.27 83.7l-53.27 83.7a8 8 0 0 0 2.46 11.05A7.9 7.9 0 0 0 176 224a8 8 0 0 0 6.76-3.71l56-88a8 8 0 0 0-.01-8.58");
}

.r6p86db6y {
  d: path("m232 128l-56 88H80l-56-88l56-88h96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="r6p86db6y"/><path class="lygomtrpe"/></g>`,
		"fallback": "ph:brackets-angle-duotone",
	});
}

export default Component;
