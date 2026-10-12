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
		"content": `<style>.b_6q7_qea {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25h18.5v3.5H2.75zm2 3.5v14.5m14.5-14.5v14.5m-11-11.5h8v5.5h-8zM11 12.5h2.5");
}
</style><path class="b_6q7_qea"/>`,
		"fallback": "iconoven:desk-drawer-sharp",
	});
}

export default Component;
