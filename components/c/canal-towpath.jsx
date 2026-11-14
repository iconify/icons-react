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
		"content": `<style>.jjhxq4qby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5q2.25-2 4.75 0Q9.5 7 12 5q2.25-2 4.75 0Q19 7 21.5 5m-19 5q2.25-2 4.75 0Q9.5 12 12 10q2.25-2 4.75 0q2.25 2 4.75 0m-19 5h19m-18 4.5H7m3.25 0h3.5m3.25 0h3.5");
}
</style><path class="jjhxq4qby"/>`,
		"fallback": "uix-sharp:canal-towpath",
	});
}

export default Component;
