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
		"content": `<style>.mwu55sbmj {
  d: path("M12.2 21.5H3v-19h14v9.1m-7-9.1v19M5.25 6h2.5m4.5 0h2.5M15 17h6v4.5h-6Z");
}

.sye78vbzq {
  d: path("M16.25 17v-1a1.75 1.75 0 0 1 3.5 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mwu55sbmj"/><path class="sye78vbzq"/></g>`,
		"fallback": "uix-sharp:gym-locker",
	});
}

export default Component;
