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
		"content": `<style>.f2fz6nbug {
  fill: currentColor;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7l4 4v15h-15v-15Zm3.5 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 1 0 0-5Zm-3.75 6.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 1 0 0-4.5Zm7.5 5.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 1 0 0-4.5Zm1.5-3.5l-2-2l-8.5 8.5l2 2Z");
}
</style><path class="f2fz6nbug"/>`,
		"fallback": "uix-sharp:black-friday",
	});
}

export default Component;
