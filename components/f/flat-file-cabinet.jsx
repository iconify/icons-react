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
		"content": `<style>.ilvwohbwp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 5h12a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 19H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 5M2.5 8.5h19M2.5 12h19m-19 3.5h19M10.75 6.75h2.5m-2.5 3.5h2.5m-2.5 3.5h2.5m-2.5 3.5h2.5");
}
</style><path class="ilvwohbwp"/>`,
		"fallback": "uix:flat-file-cabinet",
	});
}

export default Component;
