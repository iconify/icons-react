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
		"content": `<style>.av8uewomm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5h15c0 5.5-5.5 6.5-6 9.5l1.5 7.5H9l1.5-7.5c-.5-3-6-4-6-9.5Zm6 9.5h3");
}
</style><path class="av8uewomm"/>`,
		"fallback": "uix-sharp:darbuka",
	});
}

export default Component;
