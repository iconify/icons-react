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
		"content": `<style>.g2gw_vjmn {
  d: path("M5.5 6.5h13l1 13.5a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 20Zm0 0l1.5-4h10l1.5 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0dhgjdzd {
  d: path("M8 11h8v5H8Z");
}
</style><g class="ulnmmdpxh"><path class="g2gw_vjmn"/><path class="y0dhgjdzd"/></g>`,
		"fallback": "uix-sharp:cement-bag",
	});
}

export default Component;
