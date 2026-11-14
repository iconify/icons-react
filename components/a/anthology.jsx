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
		"content": `<style>.kyys6rbrq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14.5h18v5H3Zm1-5h15v5H4Zm1-5h13v5H5Zm1 10v5m10-10v5m-8-10v5");
}
</style><path class="kyys6rbrq"/>`,
		"fallback": "uix-sharp:anthology",
	});
}

export default Component;
