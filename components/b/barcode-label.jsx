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
		"content": `<style>.uoyiqmblk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 4.75h14.5a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2V6.75a2 2 0 0 1 2-2m1.5 3v6.5m2.25-6.5v6.5m2.5-6.5v6.5m2.25-6.5v6.5m2.25-6.5v6.5m2.25-6.5v6.5m-9.25 2.5h7");
}
</style><path class="uoyiqmblk"/>`,
		"fallback": "iconoven:barcode-label",
	});
}

export default Component;
