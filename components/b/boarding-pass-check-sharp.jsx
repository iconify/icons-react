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
		"content": `<style>.o6_5v7cpe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.25h18.5v11.5H2.75zM15.5 8.5v1.25m0 1.65v1.25m0 1.6v1.25M6.25 10h5.5m-5.5 4h3.5");
}
</style><path class="o6_5v7cpe"/>`,
		"fallback": "iconoven:boarding-pass-check-sharp",
	});
}

export default Component;
