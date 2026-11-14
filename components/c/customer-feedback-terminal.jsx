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
		"content": `<style>.gv37pg0xc {
  d: path("M9 10c1.5 2 4.5 2 6 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wp_b0db3n {
  d: path("M4.5 2.5h15v12h-15Zm7.5 12v7m-4 0h8M9.5 7h.01m4.99 0h.01");
}
</style><g class="ulnmmdpxh"><path class="wp_b0db3n"/><path class="gv37pg0xc"/></g>`,
		"fallback": "uix-sharp:customer-feedback-terminal",
	});
}

export default Component;
