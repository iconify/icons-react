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
		"content": `<style>.splv_iblx {
  d: path("M3 5.5h18v13H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z1ksjibwx {
  d: path("M14 9.75c-.75-1.25-4-1.25-4 .75s4 1 4 3s-3.25 2-4 .75m2-6.5v8.5");
}
</style><g class="ulnmmdpxh"><path class="splv_iblx"/><path class="z1ksjibwx"/></g>`,
		"fallback": "uix-sharp:currency-format",
	});
}

export default Component;
