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
		"content": `<style>.hneliqdkn {
  d: path("M2.5 4h19v16h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x959kqera {
  d: path("M5.25 6.75h4.5v3.5h-4.5Zm9 0h4.5v3.5h-4.5Zm-9 7h4.5v3.5h-4.5Zm9 0h4.5v3.5h-4.5Z");
}
</style><g class="ulnmmdpxh"><path class="hneliqdkn"/><path class="x959kqera"/></g>`,
		"fallback": "uix-sharp:button-deck",
	});
}

export default Component;
