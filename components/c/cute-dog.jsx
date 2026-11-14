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
		"content": `<style>.mgrj8cbha {
  d: path("M6 10.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_drmuf9d {
  d: path("M7.5 6.5c-3-1.5-5 1-4.5 5.5c.25 2 2.25 2 3.25.25M16.5 6.5c3-1.5 5 1 4.5 5.5c-.25 2-2.25 2-3.25.25m-7.5 6a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM9.75 10h.01m4.49 0h.01M12 13h.01");
}
</style><g class="ulnmmdpxh"><path class="mgrj8cbha"/><path class="w_drmuf9d"/></g>`,
		"fallback": "uix-sharp:cute-dog",
	});
}

export default Component;
