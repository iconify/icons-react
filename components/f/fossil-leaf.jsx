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
		"content": `<style>.ce0dzhbee {
  d: path("M3.5 8L8 4h10.5L21 9v8l-4 3.5H6L3 16Z");
}

.fsgcxn_qa {
  d: path("M7.5 16.5c0-6.5 3-9 9.5-9c0 6.5-3 9-9.5 9Zm0 0l6.75-6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ce0dzhbee"/><path class="fsgcxn_qa"/></g>`,
		"fallback": "uix-sharp:fossil-leaf",
	});
}

export default Component;
