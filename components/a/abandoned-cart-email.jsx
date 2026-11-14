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
		"content": `<style>.gou7cxbcf {
  d: path("m3 6.5l9 6l9-6m-6 11h7l-1 4h-5Zm1.5 0a2 2 0 0 1 4 0");
}

.ia96wwzqm {
  d: path("M12.5 19h-10V4h19v9.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ia96wwzqm"/><path class="gou7cxbcf"/></g>`,
		"fallback": "uix-sharp:abandoned-cart-email",
	});
}

export default Component;
