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
		"content": `<style>.mlx0blbhw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 5.5V12m0 3v6M17 5.5V12m0 3v6M2.5 5.5h19M4 3v5m16-5v5M3.5 12h17v3h-17Zm8.5 3v6");
}
</style><path class="mlx0blbhw"/>`,
		"fallback": "uix-sharp:bench-press",
	});
}

export default Component;
