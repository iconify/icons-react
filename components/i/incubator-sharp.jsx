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
		"content": `<style>.qbjjsmicu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.5h18.5v15.25H2.75zm3 11h9.5m3-7v5m-11-4h6.5m-6.5 3h6.5M6.5 18.75v2.5m11-2.5v2.5");
}
</style><path class="qbjjsmicu"/>`,
		"fallback": "iconoven:incubator-sharp",
	});
}

export default Component;
