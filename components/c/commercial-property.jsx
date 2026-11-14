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
		"content": `<style>.d6pp-1ias {
  d: path("M8.5 12.5h7v8h-7Z");
}

.ua6p6bb_g {
  d: path("M4 8h16v12.5H4ZM3 8l2-4h14l2 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ua6p6bb_g"/><path class="d6pp-1ias"/></g>`,
		"fallback": "uix-sharp:commercial-property",
	});
}

export default Component;
