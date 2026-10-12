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
		"content": `<style>.lro-kbq9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.6 4.4l1.5-1.531L18.6 4.4l1 1l1.531 1.5L19.6 8.4L9.1 18.9l-.418.424l-.582.126l-3.6.8l.8-3.6l.126-.582l.424-.418Zm-2.1 2.1l4 4");
}
</style><path class="lro-kbq9p"/>`,
		"fallback": "iconoven:edit-sharp",
	});
}

export default Component;
