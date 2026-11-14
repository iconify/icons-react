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
		"content": `<style>.e72z8u1sj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5q9.5 3 19 0M12 6v2.5m-5 5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm0 0h10");
}
</style><path class="e72z8u1sj"/>`,
		"fallback": "uix-sharp:bird-diverter",
	});
}

export default Component;
