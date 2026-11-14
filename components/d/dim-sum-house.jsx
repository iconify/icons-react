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
		"content": `<style>.c_mjwpm2r {
  d: path("M2.5 9.5q9.5-5.5 19 0Zm1.5 0v9A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-9M4 13h16M4 16.5h16");
}

.qzgpl4b6a {
  d: path("M10.25 6.75a1.75 1.75 0 0 1 3.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c_mjwpm2r"/><path class="qzgpl4b6a"/></g>`,
		"fallback": "uix-sharp:dim-sum-house",
	});
}

export default Component;
