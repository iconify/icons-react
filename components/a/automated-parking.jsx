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
		"content": `<style>.c3ywx0lee {
  d: path("M2.5 2.5H12v4M3.5 14v-3.5l3-.75L9 6.5h6l2.5 3.25l3 .75V14Z");
}

.fsn54euvd {
  d: path("M5.75 15.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm9 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM2.5 21.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c3ywx0lee"/><path class="fsn54euvd"/></g>`,
		"fallback": "uix-sharp:automated-parking",
	});
}

export default Component;
