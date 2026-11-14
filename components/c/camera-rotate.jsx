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
		"content": `<style>.npk3-51bl {
  d: path("M3 8.5a2 2 0 0 1 2-2h2.5L9 4h6l1.5 2.5H19a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.rup92baof {
  d: path("m11 8l1.5 1.5L11 11");
}

.s7u8me2aw {
  d: path("M15.5 13A3.5 3.5 0 1 1 12 9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="npk3-51bl"/><path class="s7u8me2aw"/><path class="rup92baof"/></g>`,
		"fallback": "uix-sharp:camera-rotate",
	});
}

export default Component;
