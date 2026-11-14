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
		"content": `<style>.ywsarsbbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5v-1a3 3 0 0 1 3-3h1m11 0h1a3 3 0 0 1 3 3v1m0 11v1a3 3 0 0 1-3 3h-1m-11 0h-1a3 3 0 0 1-3-3v-1m6-15H11m2 0h2.5m-7 19H11m2 0h2.5m-13-13V11m0 2v2.5m19-7V11m0 2v2.5m-14-8h.01m4.49 0h.01m4.49 0h.01M7.5 12h.01M12 12h.01m4.49 0h.01M7.5 16.5h.01m4.49 0h.01m4.49 0h.01");
}
</style><path class="ywsarsbbs"/>`,
		"fallback": "uix-sharp:data-zone-curated",
	});
}

export default Component;
