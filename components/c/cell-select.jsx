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
		"content": `<style>.dqk22ubip {
  d: path("M4 8.5h15v7H4Z");
}

.gtx0hsbgq {
  fill: currentColor;
  d: path("M18 15h3.5v3.5H18Z");
}

.ssf75nnqh {
  d: path("M2.5 7h18v10h-18Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ssf75nnqh"/><path class="dqk22ubip"/><path class="gtx0hsbgq"/></g>`,
		"fallback": "uix-sharp:cell-select",
	});
}

export default Component;
