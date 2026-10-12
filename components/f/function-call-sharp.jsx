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
		"content": `<style>.y7gquf1pe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 4H7v16m-3-9.75h6m5.25-2.75c-1.4 1.4-2 2.9-2 4.5s.6 3.1 2 4.5m3.5-9c1.4 1.4 2 2.9 2 4.5s-.6 3.1-2 4.5");
}
</style><path class="y7gquf1pe"/>`,
		"fallback": "iconoven:function-call-sharp",
	});
}

export default Component;
