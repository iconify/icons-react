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
		"content": `<style>.h078edb9f {
  d: path("M7.5 3.5L14 3l5 3l2 6l-1.5 6.5L13 21l-7-1l-3-6l.5-6Z");
}

.pbxlcfxkr {
  d: path("m8 16l2-4.5l2 3l2-3.25L16 16");
}

.s54c6bbsi {
  d: path("M6.5 13a5.5 4.5 0 1 0 11 0a5.5 4.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h078edb9f"/><path class="s54c6bbsi"/><path class="pbxlcfxkr"/></g>`,
		"fallback": "uix-sharp:geode",
	});
}

export default Component;
