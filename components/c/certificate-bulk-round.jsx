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

.gc793p83l {
  d: path("M9 18H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a1 1 0 0 1-2 0V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h2a1 1 0 0 1 0 2M7 6h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m11 9.38V21a1.002 1.002 0 0 1-1.707.707L15 20.414l-1.293 1.293A1 1 0 0 1 12 21v-5.62a3.828 3.828 0 0 1 5.601-5.189A3.83 3.83 0 0 1 18 15.38M7 10h2a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m6.707 4.293a1.829 1.829 0 1 0 2.586-2.587a1.829 1.829 0 0 0-2.586 2.587M14 16.697v1.889l.293-.293a1 1 0 0 1 1.414 0l.293.293v-1.889a3.9 3.9 0 0 1-2 0");
}

.rt3hilb3d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v6a5.01 5.01 0 0 1-4 4.901V21a1.002 1.002 0 0 1-1.707.707L15 20.414l-1.293 1.293A1 1 0 0 1 12 21v-3H7a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="rt3hilb3d"/><path class="gc793p83l"/></g>`,
		"fallback": "coolicons:certificate-bulk-round",
	});
}

export default Component;
