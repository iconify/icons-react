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
		"content": `<style>.o97afwl2w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5h5v3h-5Zm1 7.5v2L8 14.5v4.25h8V14.5L13.5 12v-2m-10 11.5h17M12 5.5v2.25");
}
</style><path class="o97afwl2w"/>`,
		"fallback": "uix-sharp:bottle-filling",
	});
}

export default Component;
