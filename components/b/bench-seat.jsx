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
		"content": `<style>.k1at2bc5c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4h17v4.5h-17Zm-1 7.5h19v3h-19Zm2.5-3v3m14-3v3m-14.5 3V20m15-5.5V20");
}
</style><path class="k1at2bc5c"/>`,
		"fallback": "uix-sharp:bench-seat",
	});
}

export default Component;
