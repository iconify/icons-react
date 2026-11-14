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
		"content": `<style>.a90-n1bow {
  d: path("M5.75 12c2.25-3.25 7.75-3.25 10 0l2.5-2.25v4.5L15.75 12c-2.25 3.25-7.75 3.25-10 0ZM9 11.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="a90-n1bow"/></g>`,
		"fallback": "uix-sharp:fish-pond",
	});
}

export default Component;
