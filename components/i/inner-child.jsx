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
		"content": `<style>.azucj0-jx {
  d: path("M8.25 7a2 2 0 1 1 2-2.5m5.5 2.5a2 2 0 1 0-2-2.5m-3.75 7C5.5 13 5.5 21 9 21h6c3.5 0 3.5-8-1-9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yz6edw0ci {
  d: path("M8 8a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}
</style><g class="ulnmmdpxh"><path class="yz6edw0ci"/><path class="azucj0-jx"/></g>`,
		"fallback": "uix-sharp:inner-child",
	});
}

export default Component;
