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
		"content": `<style>.o_5ar8-9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 15h4v5H3Zm7-10h4v7h-4Zm7 10h4v4h-4ZM5 12v3m0 5v1m7-18v2m0 7v3m7-3v3m0 4v2");
}
</style><path class="o_5ar8-9n"/>`,
		"fallback": "coolicons:chart-candlestick-sharp",
	});
}

export default Component;
