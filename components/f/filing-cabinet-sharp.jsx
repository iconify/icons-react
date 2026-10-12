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
		"content": `<style>.axr9izyuq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h14.5v18.5H4.75zm0 6h14.5M4.75 15h14.5M10.5 5.75h3m-3 6h3m-3 6.25h3");
}
</style><path class="axr9izyuq"/>`,
		"fallback": "iconoven:filing-cabinet-sharp",
	});
}

export default Component;
