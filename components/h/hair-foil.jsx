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
		"content": `<style>.abi7k3b6e {
  d: path("M3.5 4.5h17v17H10L3.5 15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_dyaiaqp {
  d: path("m3.5 15l5.75.75l.75 5.75m2-19C9 6 16 8 13 12c-2.5 3 1 5 .5 7m3-16.5c-3 3.5 3 5.5.5 9.5");
}
</style><g class="ulnmmdpxh"><path class="abi7k3b6e"/><path class="x_dyaiaqp"/></g>`,
		"fallback": "uix-sharp:hair-foil",
	});
}

export default Component;
