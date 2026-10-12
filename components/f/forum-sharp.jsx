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
		"content": `<style>.yrr9t5wxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v7H2.75zm5.5 11.5h13v7h-13zM6 6.25h9m-3.5 11.5H18m-12.5-5.5v5.019l1.25.481");
}
</style><path class="yrr9t5wxs"/>`,
		"fallback": "iconoven:forum-sharp",
	});
}

export default Component;
