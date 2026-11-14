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
		"content": `<style>.r1rm97bfa {
  d: path("m7.636 13.389l2.475 2.475l-4.42 4.419l-2.474-2.474ZM11 10l3.5-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wpullwedc {
  d: path("M7.5 9.5a6.5 7.5 0 1 0 13 0a6.5 7.5 0 1 0-13 0Z");
}
</style><g class="ulnmmdpxh"><path class="wpullwedc"/><path class="r1rm97bfa"/></g>`,
		"fallback": "uix-sharp:hand-mirror",
	});
}

export default Component;
