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
		"content": `<style>.c0pnds3kx {
  d: path("M12 7V5.5a2 2 0 0 1 4 0a2 2 0 0 0 4 0v-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xv_m3jbkj {
  d: path("M6.5 21.5h11a2 2 0 0 0 2-2v-4c0-3-5.5-3-5.5-5v-1h-4v1c0 2-5.5 2-5.5 5v4a2 2 0 0 0 2 2ZM9.25 7h5.5v2.5h-5.5Z");
}
</style><g class="ulnmmdpxh"><path class="xv_m3jbkj"/><path class="c0pnds3kx"/></g>`,
		"fallback": "uix-sharp:brew-airlock",
	});
}

export default Component;
