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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wasmt8b2b {
  d: path("M2.5 2.5h10v19h-10Zm2.75 4.75h4.5M5.25 12h4.5");
}

.ymb2htbzy {
  d: path("M6 21.5V17h3.25v4.5M15 9l3-3l3 3m-6 6l3 3l3-3");
}
</style><g class="ulnmmdpxh"><path class="wasmt8b2b"/><path class="ymb2htbzy"/></g>`,
		"fallback": "uix-sharp:floor-selector",
	});
}

export default Component;
