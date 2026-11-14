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
		"content": `<style>.zzgf37vlr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 10l12-5.5l6 3V19H3Zm0 0l18-2.5M3 13l18-1.5M3 16l18-.75");
}
</style><path class="zzgf37vlr"/>`,
		"fallback": "uix-sharp:cake-slice",
	});
}

export default Component;
