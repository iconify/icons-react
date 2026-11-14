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
		"content": `<style>.nxwtd4bnx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.568 8H2.5l8-5l8 5h-.632M2.5 19h10.6m-8.6-8.25V19m4-8.25V19m4-8.25v3.1m0 4.6V19m5.25-5l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}
</style><path class="nxwtd4bnx"/>`,
		"fallback": "uix-sharp:heritage-listed",
	});
}

export default Component;
