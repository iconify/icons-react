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
		"content": `<style>.dcu706evl {
  d: path("M13.107 13.491q-.538.272-1.107.509l-2-2l9-9c2.058 2.469.05 6.633-4.071 9.423M16.5 15c-1.25 0-1.75 1-1.75 2.25s.75 1.75 1 2.75l.5 1.5l1.5-2l1.5 2l.5-1.5c.25-1 1-1.5 1-2.75S20.25 15 19 15c-.75 0-.75.5-1.25.5s-.5-.5-1.25-.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wdtce9bep {
  d: path("m3 19l7-7l2 2l-7 7Z");
}
</style><g class="ulnmmdpxh"><path class="wdtce9bep"/><path class="dcu706evl"/></g>`,
		"fallback": "uix-sharp:gum-surgery",
	});
}

export default Component;
