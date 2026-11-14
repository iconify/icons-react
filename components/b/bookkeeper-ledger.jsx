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
		"content": `<style>.y20bq3eal {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 7a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM2.5 20.5c0-3.75 2.5-6 6-6c1 0 1.9.2 2.75.5m2.5-4.5H21v11h-7.25Zm2.75 0v11");
}
</style><path class="y20bq3eal"/>`,
		"fallback": "uix-sharp:bookkeeper-ledger",
	});
}

export default Component;
