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
		"content": `<style>.yfyymsdra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5h3v7h-3Zm6 3.5h3v6h-3Zm6 4h3v6h-3ZM6 2.5V5m0 7v2.5M12 6v2.5m0 6V17m6-7v2.5m0 6v3");
}
</style><path class="yfyymsdra"/>`,
		"fallback": "uix-sharp:chart-candlestick-down",
	});
}

export default Component;
