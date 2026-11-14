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
		"content": `<style>.pofeyccaf {
  d: path("M14.5 15.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4.5 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.r496b3z5d {
  d: path("M2.5 2.5h19v4h-19Zm9.3 19H4v-15h16v5.8m0 9.2h0h-.7M4 10h16M4 13.5h8.2M4 17h7.8m3.45 4l5.5-5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r496b3z5d"/><path class="pofeyccaf"/></g>`,
		"fallback": "uix-sharp:closing-down-sale",
	});
}

export default Component;
