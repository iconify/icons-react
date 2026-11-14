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
		"content": `<style>.emzd9efec {
  d: path("M7 11h10v6.5H7Zm5 0v6.5m-5-3.25h10");
}

.pnvn4uvom {
  d: path("M2.5 3.5h19v17h-19Zm4 4h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pnvn4uvom"/><path class="emzd9efec"/></g>`,
		"fallback": "uix-sharp:data-card",
	});
}

export default Component;
