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
		"content": `<style>.ezfuhbbdz {
  d: path("m12 2.5l9.5 9.5l-9.5 9.5L2.5 12Z");
}

.kn44_mbap {
  d: path("M13.75 11.25L11.5 9a1.5 1.5 0 1 0-2 2l2.25 2.25m1.75 1s1 1.25 1 1.75a1 1 0 0 1-2 0c0-.5 1-1.75 1-1.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ezfuhbbdz"/><path class="kn44_mbap"/></g>`,
		"fallback": "uix-sharp:hazard-class-8",
	});
}

export default Component;
