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
		"content": `<style>.gm4yu-b2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h8v9h-8zm10.5 0h8v9h-8zm-6.5 9v5.5m-2.25 0H9m8.25-5.5v5.5m-2.25 0h4.5");
}
</style><path class="gm4yu-b2y"/>`,
		"fallback": "iconoven:dual-monitor-sharp",
	});
}

export default Component;
