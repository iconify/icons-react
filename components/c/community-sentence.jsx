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
		"content": `<style>.htq_qbc7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.06 19H2.5V9.5l8-7l5.697 4.985m1.279 1.119L18.5 9.5v.04m-2.164 1.821l5.303 5.303l-2.475 2.475l-5.303-5.303ZM16.5 16.5l-3 3");
}
</style><path class="htq_qbc7e"/>`,
		"fallback": "uix-sharp:community-sentence",
	});
}

export default Component;
