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
		"content": `<style>.q5ja4rdgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.25c.5-8.5 17.5-8.5 18 0Zm0 3.5q1.5-1.5 3 0t3 0t3 0t3 0t3 0t3 0m-18 3.5h18v3.5H3Z");
}
</style><path class="q5ja4rdgw"/>`,
		"fallback": "uix-sharp:burger-bun",
	});
}

export default Component;
