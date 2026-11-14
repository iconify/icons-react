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
		"content": `<style>.a4c13hb0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5V17m7-14v12m7-7v13M2.75 8H5m0 6h2.25m2.5-2H12m0-6.5h2.25m2.5 5.5H19m0 7h2.25");
}
</style><path class="a4c13hb0j"/>`,
		"fallback": "uix-sharp:chart-ohlc",
	});
}

export default Component;
