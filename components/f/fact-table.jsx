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
		"content": `<style>.ei1kdh0ok {
  d: path("M3 3h18v18H3Zm0 8h18M3 16h18m-10.5-5v10");
}

.m75ue4bmm {
  d: path("M15 5H9l3 2l-3 2h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ei1kdh0ok"/><path class="m75ue4bmm"/></g>`,
		"fallback": "uix-sharp:fact-table",
	});
}

export default Component;
