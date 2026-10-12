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
		"content": `<style>.fgilbg1et {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 18.25h-8V4.75h18.5v6.5m-18.5-2.5h18.5M17.5 14v7m-3.03-5.25l6.06 3.5m-6.06 0l6.06-3.5");
}
</style><path class="fgilbg1et"/>`,
		"fallback": "iconoven:card-freeze-sharp",
	});
}

export default Component;
