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
		"content": `<style>.rlo8mib_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v8h-19Zm3 5h13m-10 6v5.5m-2-2l2 2l2-2m5-3.5v5.5m-2-2l2 2l2-2");
}
</style><path class="rlo8mib_u"/>`,
		"fallback": "uix-sharp:air-conditioner",
	});
}

export default Component;
