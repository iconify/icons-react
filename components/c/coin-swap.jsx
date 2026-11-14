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
		"content": `<style>.jor4g7drs {
  d: path("M17.25 7.75L19 9.5l1.75-1.75M9.5 19.5H7a2 2 0 0 1-2-2v-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5p_dkb2k {
  d: path("M3.25 16.25L5 14.5l1.75 1.75");
}

.yyfr2hxfw {
  d: path("M2.5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm10 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm2-12.5H17a2 2 0 0 1 2 2v3");
}
</style><g class="ulnmmdpxh"><path class="yyfr2hxfw"/><path class="jor4g7drs"/><path class="x5p_dkb2k"/></g>`,
		"fallback": "uix-sharp:coin-swap",
	});
}

export default Component;
