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
		"content": `<style>.jc6m9x9ck {
  d: path("m8 3.5l1.5 5L12 7l2.5 1.5l1.5-5M12 7v13.5M6 17h12");
}

.n0k0vbclv {
  d: path("M8 3.5L3.5 6l-1 12H6v2.5h12V18h3.5l-1-12L16 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n0k0vbclv"/><path class="jc6m9x9ck"/></g>`,
		"fallback": "uix-sharp:aviator-jacket",
	});
}

export default Component;
