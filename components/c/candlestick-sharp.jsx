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
		"content": `<style>.btipolb7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 7.75h3.5v8.5h-3.5zm1.75-3.5v3.5m0 8.5v3.5m4.75-14.5h3.5v7h-3.5zM12 2.75v2.5m0 7v4m4.75-6h3.5v7.5h-3.5zm1.75-3.5v3.5m0 7.5v3.5");
}
</style><path class="btipolb7k"/>`,
		"fallback": "iconoven:candlestick-sharp",
	});
}

export default Component;
