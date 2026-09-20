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
		"content": `<style>.gap6o81rc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 10.5V13m-2 0h4v5H3Zm2 5v2.5m7 -14V9m-2 0h4v5h-4Zm2 5v2.5m7 -14V5m-2 0h4v5h-4Zm2 5v2.5");
}
</style><path class="gap6o81rc"/>`,
		"fallback": "iconmind:candle-chart-outline-thin",
	});
}

export default Component;
