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

.d5d-kfagm {
  d: path("M232 200a8 8 0 0 1-8 8H32a8 8 0 1 1 0-16h192a8 8 0 0 1 8 8M25.59 150.84a16 16 0 0 1 2-17.07l81.67-100.83a24.11 24.11 0 0 1 37.48 0l81.65 100.83A16.1 16.1 0 0 1 215.91 160H40.09a16 16 0 0 1-14.5-9.16M40 143.91s0 .09.08.11h175.83s.08-.09.08-.13L134.3 43a8.1 8.1 0 0 0-12.6 0L40 143.84a.3.3 0 0 0 0 .07");
}

.yxivojrzp {
  d: path("M215.92 152H40.08a8.1 8.1 0 0 1-6.26-13.2L115.48 38a16.1 16.1 0 0 1 25 0l81.7 100.8a8.1 8.1 0 0 1-6.26 13.2");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="yxivojrzp"/><path class="d5d-kfagm"/></g>`,
		"fallback": "ph:eject-simple-duotone",
	});
}

export default Component;
