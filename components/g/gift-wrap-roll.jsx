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
		"content": `<style>.m8w56wnil {
  d: path("M4 5a3.25 1.5 0 1 0 6.5 0A3.25 1.5 0 1 0 4 5Zm6.5 14.5Q12 21 14 21h3.75a2.25 2.25 0 0 0 0-4.5H16.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zmjc42b1y {
  d: path("M4 5v14.5a3.25 1.5 0 0 0 6.5 0V5");
}
</style><g class="ulnmmdpxh"><path class="zmjc42b1y"/><path class="m8w56wnil"/></g>`,
		"fallback": "uix-sharp:gift-wrap-roll",
	});
}

export default Component;
