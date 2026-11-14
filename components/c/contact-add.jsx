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
		"content": `<style>.n4851-bcd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14v18H5ZM3.5 8h3m-3 4h3m-3 4h3M12 8.5v7M8.5 12h7");
}
</style><path class="n4851-bcd"/>`,
		"fallback": "uix-sharp:contact-add",
	});
}

export default Component;
