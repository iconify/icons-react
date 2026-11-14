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
		"content": `<style>.hbdwe-b5w {
  d: path("M5.75 7.5q1.75 2 3.25 0t3 0t3 0t3.25 0");
}

.nh9tfripy {
  d: path("M5.5 3h13L17 21H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nh9tfripy"/><path class="hbdwe-b5w"/></g>`,
		"fallback": "uix-sharp:dark-beer",
	});
}

export default Component;
