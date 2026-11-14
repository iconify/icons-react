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
		"content": `<style>.xgk0pjb0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5H7v16H3.5Zm6.5 5h3.5v11H10Zm6.5 6H20v5h-3.5Zm1.75-12v8.5m-2-2l2 2l2-2");
}
</style><path class="xgk0pjb0s"/>`,
		"fallback": "uix-sharp:dose-decrease",
	});
}

export default Component;
