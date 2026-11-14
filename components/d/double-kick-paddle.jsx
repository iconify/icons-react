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
		"content": `<style>.gq65is47y {
  d: path("M8.5 11.5L12 15l3.5-3.5M12 15v5.5M6.5 8h.01M17.5 8h.01");
}

.n3o-vs7xv {
  d: path("M2.5 8a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm11 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n3o-vs7xv"/><path class="gq65is47y"/></g>`,
		"fallback": "uix-sharp:double-kick-paddle",
	});
}

export default Component;
