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
		"content": `<style>.k3ih7ybiu {
  d: path("M3 3h18v13H3Zm3 13l-1.5 4M18 16l1.5 4");
}

.sdup-wboq {
  d: path("M6.5 6.5h11v6h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k3ih7ybiu"/><path class="sdup-wboq"/></g>`,
		"fallback": "uix-sharp:enlarger-easel",
	});
}

export default Component;
