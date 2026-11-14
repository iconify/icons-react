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
		"content": `<style>.ixrllqbhh {
  d: path("M5.5 3h13v17.5h-13Zm-3 9.5h3v3h-3Zm16 0h3v3h-3Z");
}

.o-naylwhk {
  d: path("M5.5 7.5L8.75 9L12 7.5L15.25 9l3.25-1.5m-9 5.25h.01m4.99 0h.01m-5.01 4h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ixrllqbhh"/><path class="o-naylwhk"/></g>`,
		"fallback": "uix-sharp:frankenstein-bolt",
	});
}

export default Component;
