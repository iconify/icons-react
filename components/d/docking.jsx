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
		"content": `<style>.eub1r_bkv {
  d: path("M10.25 16a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0ZM5.5 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ffdyi1ley {
  d: path("M13.5 16a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.te6a3jb6y {
  d: path("M2.25 8a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="te6a3jb6y"/><path class="eub1r_bkv"/><path class="ffdyi1ley"/></g>`,
		"fallback": "uix-sharp:docking",
	});
}

export default Component;
