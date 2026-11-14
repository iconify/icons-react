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
		"content": `<style>.u_f5ilbzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h6v11h12.5v8H3Zm3 3v5m0 7h12.5M11 6.5l3 3m-3 0l5 2");
}
</style><path class="u_f5ilbzh"/>`,
		"fallback": "uix-sharp:bioptic-scanner",
	});
}

export default Component;
