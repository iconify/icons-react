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
		"content": `<style>.lsds1qe0q {
  d: path("M2.5 7.5h3v7h-3m19-7h-3v7h3M5.5 9l4-2.5H14l4.5 2v5l-5 4c-.75.5-1.75.5-2.5 0l-5.5-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yoexb_jgm {
  d: path("m14 6.5l-3.5 4a1.25 1.25 0 0 0 1.75 1.75L15 10");
}
</style><g class="ulnmmdpxh"><path class="lsds1qe0q"/><path class="yoexb_jgm"/></g>`,
		"fallback": "uix-sharp:agent-handshake",
	});
}

export default Component;
