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
		"content": `<style>.cnv8c3igv {
  d: path("m12 6.75l1.469 3.477l3.762.323l-2.853 2.473l.855 3.677L12 14.75L8.767 16.7l.855-3.677l-2.853-2.473l3.762-.323Z");
}

.so7639bqv {
  d: path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="so7639bqv"/><path class="cnv8c3igv"/></g>`,
		"fallback": "uix-sharp:button-icon",
	});
}

export default Component;
