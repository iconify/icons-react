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
		"content": `<style>.nhp2xpbdv {
  d: path("M9.25 9c0-1.75 1.25-3 3-3C13.9 6 15 7.25 15 8.75S13.75 10.9 12.75 12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wty6em6ov {
  d: path("M6.25 9c0-3.5 2.5-6 6-6c3.25 0 5.5 2.5 5.5 5.75c0 2.75-1.5 4-2.75 5.25s-1.25 2.5-1.75 4.5c-.5 1.75-2 2.5-3.5 2.5c-2 0-3.5-1.5-3.5-3.5");
}
</style><g class="ulnmmdpxh"><path class="wty6em6ov"/><path class="nhp2xpbdv"/></g>`,
		"fallback": "uix-sharp:ear",
	});
}

export default Component;
