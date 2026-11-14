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
		"content": `<style>.wxx7dcbjt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.5V7M5.5 7h5v8h-5ZM8 15v3.5m8-13v4m-2.5 0h5v7h-5Zm2.5 7v4");
}
</style><path class="wxx7dcbjt"/>`,
		"fallback": "uix-sharp:chart-candlestick",
	});
}

export default Component;
