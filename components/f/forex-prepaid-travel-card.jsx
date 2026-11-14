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
		"content": `<style>.bau7n2byr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.7 19H2.5V5h19v10.7m-19-6.2h19M6 14.5h3.5m8.5 0v7m-3.25-2.75L18 17l3.25 1.75M16.5 21.5l1.5-.75l1.5.75");
}
</style><path class="bau7n2byr"/>`,
		"fallback": "uix-sharp:forex-prepaid-travel-card",
	});
}

export default Component;
