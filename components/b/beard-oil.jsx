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
		"content": `<style>.de2xw42_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.5h10.5v11H3ZM5.5 7H11v3.5H5.5Zm1 0V4.5a1.75 1.75 0 0 1 3.5 0V7m9 2s2.5 3.25 2.5 5a2.5 2.5 0 0 1-5 0c0-1.75 2.5-5 2.5-5Z");
}
</style><path class="de2xw42_s"/>`,
		"fallback": "uix-sharp:beard-oil",
	});
}

export default Component;
