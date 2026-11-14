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
		"content": `<style>.htuf028kj {
  d: path("M2.5 6h19v12h-19Zm11 0v12M6 12h4.5");
}

.p47ibdq9c {
  d: path("m16 11l1.5 1.5L19 11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="htuf028kj"/><path class="p47ibdq9c"/></g>`,
		"fallback": "uix-sharp:button-split",
	});
}

export default Component;
