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
		"content": `<style>.kvo74gbmt {
  d: path("M7 3v13a4.5 4.5 0 0 0 9 0v-6");
}

.ocaez4f_f {
  d: path("M4 9.5c0-3.5 6-3.5 6 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kvo74gbmt"/><path class="ocaez4f_f"/></g>`,
		"fallback": "uix-sharp:cable-needle",
	});
}

export default Component;
