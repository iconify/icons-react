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
		"content": `<style>.j-uuwsbvv {
  d: path("M14.9 12.5H8V9h8v3m-8 4h4m2.5 2a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm1.75 0h3.5");
}

.n3-_yrljg {
  d: path("M12.8 21.5H5v-19h14v9.3M8 6h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n3-_yrljg"/><path class="j-uuwsbvv"/></g>`,
		"fallback": "uix-sharp:cash-withdrawal-slip",
	});
}

export default Component;
