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
		"content": `<style>.pkag1cbnc {
  d: path("M2.5 9.5h4l3-3h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-10l-3-3h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z63lv2vch {
  d: path("M13 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm2.5 0h.01");
}
</style><g class="ulnmmdpxh"><path class="pkag1cbnc"/><path class="z63lv2vch"/></g>`,
		"fallback": "uix-sharp:golf-rangefinder",
	});
}

export default Component;
