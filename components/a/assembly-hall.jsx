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
		"content": `<style>.qx_f7-bma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 8.5l9.5-5l9.5 5Zm0 12h19m-17-12v12m5-12v12m5-12v12m5-12v12");
}
</style><path class="qx_f7-bma"/>`,
		"fallback": "uix-sharp:assembly-hall",
	});
}

export default Component;
