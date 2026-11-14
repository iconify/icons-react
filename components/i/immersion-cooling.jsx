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
		"content": `<style>.fz-5-v72h {
  d: path("M3.5 6.5q4.25-2 8.5 0t8.5 0M8 13.25h8v5H8Zm5-3.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-2.75.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zxoc5rblm {
  d: path("M3.5 3v15.5A2.5 2.5 0 0 0 6 21h12a2.5 2.5 0 0 0 2.5-2.5V3");
}
</style><g class="ulnmmdpxh"><path class="zxoc5rblm"/><path class="fz-5-v72h"/></g>`,
		"fallback": "uix-sharp:immersion-cooling",
	});
}

export default Component;
