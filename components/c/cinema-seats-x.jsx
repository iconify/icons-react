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
		"content": `<style>.d9lcyzbld {
  d: path("M2.5 10v7h10.6m5.4-3.4V10m-8 7v3.5m-2.5 0h3.6m3.9-5l5 5m0-5l-5 5");
}

.nc8v2db9u {
  d: path("M13.6 13.5H6V3h9v9.1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nc8v2db9u"/><path class="d9lcyzbld"/></g>`,
		"fallback": "uix-sharp:cinema-seats-x",
	});
}

export default Component;
