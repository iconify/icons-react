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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j6-ofzb8x {
  d: path("M6.75 6.75h1.5v1.5h-1.5zm6 0h1.5v1.5h-1.5zm-3 3h1.5v1.5h-1.5zm6 0h1.5v1.5h-1.5zm-9 3h1.5v1.5h-1.5zm6 0h1.5v1.5h-1.5zm-3 3h1.5v1.5h-1.5zm6 0h1.5v1.5h-1.5z");
}

.yt_4_pnkq {
  d: path("M4.5 3h15A1.5 1.5 0 0 1 21 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3");
}
</style><g class="hntgybcog"><path class="yt_4_pnkq"/><path class="j6-ofzb8x"/></g>`,
		"fallback": "iconoven:chessboard",
	});
}

export default Component;
