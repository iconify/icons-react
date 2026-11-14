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
		"content": `<style>.g4wi8hb0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8.5l9-5l9 5Zm0 11h10.3m-7.8-8v5m4-5v5m4-5v5m5.5-2.25v7m-2.5-2.5l2.5 2.5l2.5-2.5");
}
</style><path class="g4wi8hb0o"/>`,
		"fallback": "uix-sharp:borrow-money",
	});
}

export default Component;
