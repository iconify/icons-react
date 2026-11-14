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
		"content": `<style>.f47e_mbtf {
  d: path("M3.5 16.5v-12a2 2 0 0 1 2-2h10");
}

.t2zcrdbyn {
  d: path("M8 6.5h13.5v15H8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqdtbhbrm {
  d: path("M13 11.5L10.75 14L13 16.5m3.5-5l2.25 2.5l-2.25 2.5");
}
</style><g class="ulnmmdpxh"><path class="f47e_mbtf"/><path class="t2zcrdbyn"/><path class="xqdtbhbrm"/></g>`,
		"fallback": "uix-sharp:code-duplication",
	});
}

export default Component;
