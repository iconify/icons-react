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
		"content": `<style>.jjts9bbyi {
  d: path("M10.5 12C8.5 8 3 7.5 3 12s5.5 4 7.5 0s3-8 6.5-7.5C21 5 22 11 20.5 15s-6 5-8.5 3");
}

.ouul6pb-a {
  d: path("M14.5 9.5c3-.5 4 4 1 5c-2.5 1-4-1.5-5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ouul6pb-a"/><path class="jjts9bbyi"/></g>`,
		"fallback": "uix-sharp:chaos-theory",
	});
}

export default Component;
