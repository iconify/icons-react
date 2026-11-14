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
		"content": `<style>.n4s29x7xb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19v5h-19Zm3 5v14m13-14v14M8 5h8M5.5 12.5h13M5.5 17h13m-13 4.5h13M7.5 9.75H11v2.75H7.5Zm5.5 0h3.5v2.75H13Zm-5.5 4.5H11V17H7.5Zm5.5 0h3.5V17H13Zm-5.5 4.5H11v2.75H7.5Zm5.5 0h3.5v2.75H13Z");
}
</style><path class="n4s29x7xb"/>`,
		"fallback": "uix-sharp:floor-display-unit",
	});
}

export default Component;
