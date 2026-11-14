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
		"content": `<style>.gf3zuwb-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5H16v11H2.5Zm4.5 0V5h4.5v2.5m-9 4.5H16m0 3.5h5.5M19 13l2.5 2.5L19 18");
}
</style><path class="gf3zuwb-u"/>`,
		"fallback": "uix-sharp:briefcase-arrow",
	});
}

export default Component;
