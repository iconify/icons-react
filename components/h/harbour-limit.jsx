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
		"content": `<style>.t9u9efbnl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5v7m0-7l4 5h-4m-5 2h10l-1.5 3h-7Zm5-11a9.5 9.5 0 0 1 6.106 2.223m2.121 2.527a9.5 9.5 0 0 1 1.129 6.4m-1.129 3.1a9.5 9.5 0 0 1-4.978 4.177M12 21.5a9.5 9.5 0 0 1-6.106-2.223M3.773 16.75a9.5 9.5 0 0 1-1.129-6.4m1.129-3.1a9.5 9.5 0 0 1 4.978-4.177");
}
</style><path class="t9u9efbnl"/>`,
		"fallback": "uix-sharp:harbour-limit",
	});
}

export default Component;
