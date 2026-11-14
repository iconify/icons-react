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
		"content": `<style>.hlzpxe_kj {
  d: path("M2.5 9.75C4 6.5 6.6 4.5 9.75 4.5s5.75 2 7.25 5.25C15.5 13 12.9 15 9.75 15S4 13 2.5 9.75Z");
}

.iva_nuzrc {
  d: path("M7.25 9.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm11.25 5V18m0 2.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hlzpxe_kj"/><path class="iva_nuzrc"/></g>`,
		"fallback": "uix-sharp:eye-alert",
	});
}

export default Component;
