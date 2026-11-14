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
		"content": `<style>.rdkijzb1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5h2l3 4.5h10c1.75 0 3 .75 3 1.75s-1.25 1.75-3 1.75H6Zm10 8l-3.5 4m-7.5 3h19");
}
</style><path class="rdkijzb1g"/>`,
		"fallback": "uix-sharp:genre-flight-sim",
	});
}

export default Component;
