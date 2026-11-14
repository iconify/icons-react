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
		"content": `<style>.kjiuexhnl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10H16l-2.25 5H5Zm9.5 0l7.25-6.5m0 0V19M2.5 18.5q2.375-1 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><path class="kjiuexhnl"/>`,
		"fallback": "uix-sharp:fisher",
	});
}

export default Component;
