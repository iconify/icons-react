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
		"content": `<style>.us7vsbarc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.25h8.5v15h-8.5zm0 3.75h8.5m-8.5 3.75h8.5m-8.5 3.75h8.5m2.5-3.75h7.5v7.5h-7.5zm0 3.75h7.5");
}
</style><path class="us7vsbarc"/>`,
		"fallback": "iconoven:coin-stack-sharp",
	});
}

export default Component;
