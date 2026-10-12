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
		"content": `<style>.hpbj_tc9w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h7v18.5h-7zm7 3.75h10.5v4h-10.5zm-3.5 8v3");
}
</style><path class="hpbj_tc9w"/>`,
		"fallback": "iconoven:door-handle-sharp",
	});
}

export default Component;
