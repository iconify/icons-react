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

.el5g8kvob {
  d: path("M168 48v160a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gvvxembev {
  d: path("M208 120h-32V48a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v72H48a8 8 0 0 0 0 16h32v72a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-72h32a8 8 0 0 0 0-16m-48 88H96V48h64Z");
}
</style><g class="cuyn6tgcc"><path class="el5g8kvob"/><path class="gvvxembev"/></g>`,
		"fallback": "ph:align-center-vertical-simple-duotone",
	});
}

export default Component;
