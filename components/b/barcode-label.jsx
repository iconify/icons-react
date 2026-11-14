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
		"content": `<style>.a93g7k6sn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6h10a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 17 18H7a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 7 6m1 3v6m2.5-6v6M12 9v6m2.5-6v6M16 9v6");
}
</style><path class="a93g7k6sn"/>`,
		"fallback": "uix:barcode-label",
	});
}

export default Component;
