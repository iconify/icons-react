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
		"content": `<style>.xl50tgu0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13h4.5v6h-4.5Zm7-5h4.5v6h-4.5Zm7-4h4.5v6h-4.5ZM5 10.5V13m0 6v2.5m7-16V8m0 6v2.5m7-14V4m0 6v2");
}
</style><path class="xl50tgu0s"/>`,
		"fallback": "uix-sharp:chart-candlestick-up",
	});
}

export default Component;
