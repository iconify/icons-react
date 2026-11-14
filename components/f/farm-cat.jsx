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
		"content": `<style>.cjw252mlc {
  d: path("M6 14h5.5v7H6Zm0 0l5.5 7m0-7L6 21m8.5-6.5l2 2h3l2-2V19c0 1.75-1.5 2.75-3.5 2.75s-3.5-1-3.5-2.75Z");
}

.gv5ibwbdx {
  d: path("M12.104 21H3V10l9-7l9 7v1.096");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gv5ibwbdx"/><path class="cjw252mlc"/></g>`,
		"fallback": "uix-sharp:farm-cat",
	});
}

export default Component;
