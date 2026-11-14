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
		"content": `<style>.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.pxowz7n_c {
  d: path("M12.562 19.5H2.5v-13l2-3.5h13l2 3.5v6.438M2.5 6.5h17m-8.5 0v4m9.75 8A2.75 2.75 0 1 1 18 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pxowz7n_c"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:date-rotation",
	});
}

export default Component;
