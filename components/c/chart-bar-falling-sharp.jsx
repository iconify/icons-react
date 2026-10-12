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
		"content": `<style>.n1q9j-asq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12h18.5m-17-6.75h3.5v4.5h-3.5zm6 9h3.5v7h-3.5zm6-11.5h3.5v7h-3.5z");
}
</style><path class="n1q9j-asq"/>`,
		"fallback": "iconoven:chart-bar-falling-sharp",
	});
}

export default Component;
