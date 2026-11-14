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
		"content": `<style>.plal0ubuh {
  d: path("M3 2.5v7M3 4h17.5M6 8.5h14V21H6ZM8.5 4v4.5m9-4.5v4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x97_ztz8m {
  d: path("m9 13.75l4-2.5l4 2.5Zm1.25 0v3.75M13 13.75v3.75m2.75-3.75v3.75M9 17.5h8");
}
</style><g class="ulnmmdpxh"><path class="plal0ubuh"/><path class="x97_ztz8m"/></g>`,
		"fallback": "uix-sharp:bank-sign",
	});
}

export default Component;
