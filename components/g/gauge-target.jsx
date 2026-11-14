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
		"content": `<style>.r4cg_d1vy {
  d: path("M2.5 17.5a9.5 9.5 0 0 1 19 0m-19 0h19m-9.5 0L7.25 11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w922u0pni {
  fill: currentColor;
  d: path("m19.782 7.059l1.149.965l-3.857 4.596l-1.149-.964Z");
}
</style><g class="ulnmmdpxh"><path class="r4cg_d1vy"/><path class="w922u0pni"/></g>`,
		"fallback": "uix-sharp:gauge-target",
	});
}

export default Component;
