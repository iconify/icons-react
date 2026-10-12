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
		"content": `<style>.x3hw_gb6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17.25h18.5v4H2.75zm4 0v4M5.25 10.5h15v4h-15zm-1.5-6.75h14.5v4H3.75zm10.5 0v4");
}
</style><path class="x3hw_gb6p"/>`,
		"fallback": "iconoven:book-stack-sharp",
	});
}

export default Component;
