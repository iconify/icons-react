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
		"content": `<style>.ef_suabze {
  d: path("M7.5 19.5v-7h4v7m4.5 2v-7h2.75a2.25 2.25 0 0 1 0 4.5H16");
}

.m4rmrt_ay {
  d: path("M3 3h16v4H3Zm1 4v12.5h9.2m4.8-7.8V7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m4rmrt_ay"/><path class="ef_suabze"/></g>`,
		"fallback": "uix-sharp:car-park-store",
	});
}

export default Component;
