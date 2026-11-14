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
		"content": `<style>.ewodcgbdh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.5c1.5-2 4.5-1.75 6 .5c.75 1.1 1.75 1.5 3 1c-1 3-4.5 3.5-6.5 2.25c-1-.65-1.75-1.25-2.5-2c-.75.75-1.5 1.35-2.5 2C7.5 10.5 4 10 3 7c1.25.5 2.25.1 3-1c1.5-2.25 4.5-2.5 6-.5m-7.5 8h15M6 13.5V20m3-6.5V20m3-6.5V20m3-6.5V20m3-6.5V20");
}
</style><path class="ewodcgbdh"/>`,
		"fallback": "uix:beard-comb",
	});
}

export default Component;
