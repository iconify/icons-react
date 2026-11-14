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
		"content": `<style>.p2wn83b4s {
  d: path("M3 12.5h5L9.5 15h5l1.5-2.5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zf3fapbaj {
  d: path("M5.5 4.5h13l2.5 8v7H3v-7Z");
}
</style><g class="ulnmmdpxh"><path class="zf3fapbaj"/><path class="p2wn83b4s"/></g>`,
		"fallback": "uix-sharp:inbox",
	});
}

export default Component;
