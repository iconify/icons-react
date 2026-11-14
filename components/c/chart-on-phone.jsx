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
		"content": `<style>.dxsxh5xhc {
  d: path("M6 2.5h12v19H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vovdhwbgy {
  d: path("m9 15l2-3.5l2 1.5l2-4.5");
}
</style><g class="ulnmmdpxh"><path class="dxsxh5xhc"/><path class="vovdhwbgy"/></g>`,
		"fallback": "uix-sharp:chart-on-phone",
	});
}

export default Component;
