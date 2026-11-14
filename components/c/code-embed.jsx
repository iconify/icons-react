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
		"content": `<style>.gu5_5bcph {
  d: path("m8 7.5l-2.25 3.25L8 14m3-6.5l2.25 3.25L11 14");
}

.m7szh0f-l {
  d: path("M3 2.5h13V19H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m7szh0f-l"/><path class="gu5_5bcph"/></g>`,
		"fallback": "uix-sharp:code-embed",
	});
}

export default Component;
