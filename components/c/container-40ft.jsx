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
		"content": `<style>.bb5-y3lqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19v11h-19Zm4 0v11m3.5-11v11m4-11v11m3.5-11v11M3 21h18");
}
</style><path class="bb5-y3lqy"/>`,
		"fallback": "uix-sharp:container-40ft",
	});
}

export default Component;
