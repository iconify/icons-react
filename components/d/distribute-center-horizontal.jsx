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
		"content": `<style>.rz1hies0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6h6v12h-6ZM14 8.5h6.5v7H14Zm-7.5-6V6m0 12v3.5m10.75-19v6m0 7v6");
}
</style><path class="rz1hies0n"/>`,
		"fallback": "uix-sharp:distribute-center-horizontal",
	});
}

export default Component;
